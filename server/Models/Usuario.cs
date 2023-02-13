using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models;

public class Usuario
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Nome { get; set; } = null!;
    public string? Codigo { get; set; }
    public string? Telefone { get; set; }
    public string CPF { get; set; } = null!;
    public string? Endereco { get; set; }
}