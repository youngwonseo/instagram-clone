// process.env에 포함하기 위한 
declare namespace NodeJS {
  interface ProcessEnv {
    MYSQL_HOST: localhost;
    MYSQL_USER: development;
    MYSQL_DATABASE: instagram;
    MYSQL_PASSWORD: development;
  }
}