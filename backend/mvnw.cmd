@REM ----------------------------------------------------------------------------
@REM Maven Wrapper startup batch script
@REM ----------------------------------------------------------------------------
@IF "%__MVNW_ARG0_NAME__%"=="" (SET "__MVNW_ARG0_NAME__=%~nx0")
@SET ___MVNW_WDIR=%~dp0
@SET ___MVNW_PROJECT_BASEDIR=%___MVNW_WDIR%
@SET ___MVNW_REPOURL=https://repo.maven.apache.org/maven2

@IF NOT EXIST "%___MVNW_PROJECT_BASEDIR%\.mvn\wrapper\maven-wrapper.jar" (
  @ECHO [INFO] Downloading Maven wrapper...
)

@SET JAVA_HOME_HINT=%JAVA_HOME%
@IF "%JAVA_HOME_HINT%"=="" (
  @FOR /f "tokens=*" %%i IN ('where java 2^>nul') DO SET JAVA_HOME_HINT=%%~dpi..
)

@"%JAVA_HOME_HINT%\bin\java" -Dmaven.multiModuleProjectDirectory="%___MVNW_PROJECT_BASEDIR%" -jar "%___MVNW_PROJECT_BASEDIR%\.mvn\wrapper\maven-wrapper.jar" %*
