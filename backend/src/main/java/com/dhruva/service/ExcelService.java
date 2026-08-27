package com.dhruva.service;

import com.dhruva.model.ContactSubmission;
import com.dhruva.model.QuoteSubmission;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ExcelService {

    @Value("${dhruva.excel.file-path}")
    private String excelFilePath;

    private static final String CONTACT_SHEET   = "Contact Enquiries";
    private static final String QUOTE_SHEET     = "Quote Requests";
    private static final DateTimeFormatter DTF  = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

    // ─────────────────────────────────────────────────────────────────
    // PUBLIC API
    // ─────────────────────────────────────────────────────────────────

    public synchronized void saveContact(ContactSubmission c) throws IOException {
        XSSFWorkbook wb = loadOrCreate();
        XSSFSheet sheet = getOrCreateSheet(wb, CONTACT_SHEET, new String[]{
            "Sl No", "Submitted At", "Full Name", "Company", "Phone", "Email",
            "Service Required", "Message"
        });

        int rowNum = sheet.getLastRowNum() + 1;
        Row row = sheet.createRow(rowNum);

        setValue(row, 0, String.valueOf(rowNum));
        setValue(row, 1, LocalDateTime.now().format(DTF));
        setValue(row, 2, c.getName());
        setValue(row, 3, c.getCompany() != null ? c.getCompany() : "—");
        setValue(row, 4, c.getPhone());
        setValue(row, 5, c.getEmail());
        setValue(row, 6, c.getServiceRequired() != null ? c.getServiceRequired() : "General Enquiry");
        setValue(row, 7, c.getMessage());

        applyDataStyle(wb, row, 8);
        save(wb);
    }

    public synchronized void saveQuote(QuoteSubmission q) throws IOException {
        XSSFWorkbook wb = loadOrCreate();
        XSSFSheet sheet = getOrCreateSheet(wb, QUOTE_SHEET, new String[]{
            "Sl No", "Submitted At", "Full Name", "Company", "Phone", "Email",
            "Service", "Preferred Contact", "Requirement / Message"
        });

        int rowNum = sheet.getLastRowNum() + 1;
        Row row = sheet.createRow(rowNum);

        setValue(row, 0, String.valueOf(rowNum));
        setValue(row, 1, LocalDateTime.now().format(DTF));
        setValue(row, 2, q.getName());
        setValue(row, 3, q.getCompany());
        setValue(row, 4, q.getPhone());
        setValue(row, 5, q.getEmail());
        setValue(row, 6, q.getService() != null ? q.getService() : "—");
        setValue(row, 7, q.getPreferredContact() != null ? q.getPreferredContact() : "phone");
        setValue(row, 8, q.getMessage());

        applyDataStyle(wb, row, 9);
        save(wb);
    }

    // ─────────────────────────────────────────────────────────────────
    // HELPERS
    // ─────────────────────────────────────────────────────────────────

    private XSSFWorkbook loadOrCreate() throws IOException {
        Path path = Paths.get(excelFilePath);
        Files.createDirectories(path.getParent());
        if (Files.exists(path)) {
            try (InputStream in = Files.newInputStream(path)) {
                return new XSSFWorkbook(in);
            }
        }
        return new XSSFWorkbook();
    }

    private XSSFSheet getOrCreateSheet(XSSFWorkbook wb, String name, String[] headers) {
        XSSFSheet sheet = wb.getSheet(name);
        if (sheet == null) {
            sheet = wb.createSheet(name);
            writeHeaderRow(wb, sheet, headers);
        }
        return sheet;
    }

    private void writeHeaderRow(XSSFWorkbook wb, XSSFSheet sheet, String[] headers) {
        // Header style — navy background, white bold text
        XSSFCellStyle headerStyle = wb.createCellStyle();
        XSSFFont headerFont = wb.createFont();
        headerFont.setBold(true);
        headerFont.setColor(IndexedColors.WHITE.getIndex());
        headerFont.setFontHeightInPoints((short) 11);
        headerStyle.setFont(headerFont);
        headerStyle.setFillForegroundColor(new XSSFColor(new byte[]{(byte)15, (byte)23, (byte)42}, null)); // #0F1726 slate-950
        headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        headerStyle.setBorderBottom(BorderStyle.THIN);
        headerStyle.setBottomBorderColor(IndexedColors.CORNFLOWER_BLUE.getIndex());
        headerStyle.setAlignment(HorizontalAlignment.CENTER);
        headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);

        Row headerRow = sheet.createRow(0);
        headerRow.setHeightInPoints(22);
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
            cell.setCellStyle(headerStyle);
            sheet.setColumnWidth(i, 28 * 256); // ~28 chars wide
        }

        // Wider columns for message/service fields
        if (headers.length >= 8) sheet.setColumnWidth(7, 45 * 256);
        if (headers.length >= 9) sheet.setColumnWidth(8, 45 * 256);

        // Auto-filter on header row
        sheet.setAutoFilter(new CellRangeAddress(0, 0, 0, headers.length - 1));

        // Freeze header row
        sheet.createFreezePane(0, 1);
    }

    private void applyDataStyle(XSSFWorkbook wb, Row row, int colCount) {
        // Alternating row colors
        boolean isEven = (row.getRowNum() % 2 == 0);
        XSSFCellStyle dataStyle = wb.createCellStyle();
        XSSFFont dataFont = wb.createFont();
        dataFont.setFontHeightInPoints((short) 10);
        dataStyle.setFont(dataFont);
        dataStyle.setFillForegroundColor(new XSSFColor(
            isEven ? new byte[]{(byte)248, (byte)250, (byte)252}   // slate-50
                   : new byte[]{(byte)241, (byte)245, (byte)249},  // slate-100
            null
        ));
        dataStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        dataStyle.setBorderBottom(BorderStyle.THIN);
        dataStyle.setBottomBorderColor(IndexedColors.GREY_25_PERCENT.getIndex());
        dataStyle.setWrapText(true);
        dataStyle.setVerticalAlignment(VerticalAlignment.CENTER);

        for (int i = 0; i < colCount; i++) {
            Cell cell = row.getCell(i);
            if (cell != null) cell.setCellStyle(dataStyle);
        }

        row.setHeightInPoints(18);
    }

    private void setValue(Row row, int col, String value) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value != null ? value : "");
    }

    private void save(XSSFWorkbook wb) throws IOException {
        Path path = Paths.get(excelFilePath);
        Files.createDirectories(path.getParent());
        try (OutputStream out = Files.newOutputStream(path)) {
            wb.write(out);
        }
        wb.close();
    }
}
