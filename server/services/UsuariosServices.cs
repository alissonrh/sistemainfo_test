using server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace server.Services;

public class UsuariosService
{
    private readonly IMongoCollection<Usuario> _usuariosCollection;

    public UsuariosService(
        IOptions<SistemaInfoDbDatabaseSettings> SistemaInfoDbDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            SistemaInfoDbDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            SistemaInfoDbDatabaseSettings.Value.DatabaseName);

        _usuariosCollection = mongoDatabase.GetCollection<Usuario>(
            SistemaInfoDbDatabaseSettings.Value.UsuariosCollectionName);
    }

    public async Task<List<Usuario>> GetAsync() =>
        await _usuariosCollection.Find(_ => true).ToListAsync();

    public async Task<Usuario?> GetAsync(string id) =>
        await _usuariosCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Usuario newUsuario) =>
        await _usuariosCollection.InsertOneAsync(newUsuario);

    public async Task UpdateAsync(string id, Usuario updatedUsuario) =>
        await _usuariosCollection.ReplaceOneAsync(x => x.Id == id, updatedUsuario);

    public async Task RemoveAsync(string id) =>
        await _usuariosCollection.DeleteOneAsync(x => x.Id == id);
}