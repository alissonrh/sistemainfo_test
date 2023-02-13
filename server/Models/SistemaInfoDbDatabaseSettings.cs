namespace server.Models;

public class SistemaInfoDbDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string UsuariosCollectionName { get; set; } = null!;
}