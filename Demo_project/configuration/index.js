
const config = {
    dialect: 'mssql',
    dialectModulePath: 'sequelize-odbc-mssql',
    dialectOptions: {
        connectionString: 'Driver={SQL Server Native Client 11.0};Server=WINDOWS-RCGQNV3;Database=DemoDB_2;Trusted_Connection=yes;'
    }
};

module.exports= { config }