using server.Models;
using server.Services;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuariosController : ControllerBase
{
    private readonly UsuariosService _UsuariosService;

    public UsuariosController(UsuariosService UsuariosService) =>
        _UsuariosService = UsuariosService;

    [HttpGet]
    public async Task<List<Usuario>> Get() =>
        await _UsuariosService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Usuario>> Get(string id)
    {
        var usuario = await _UsuariosService.GetAsync(id);

        if (usuario is null)
        {
            return NotFound();
        }

        return usuario;
    }

/*         public async Task<IActionResult> Post(Usuario newUsuario)
{
    await _UsuariosService.CreateAsync(newUsuario);

    string message = String.Format("{0} cadastrado com sucesso, código: {1}. Quatro primeiros números do CPF: {2}",
                               newUsuario.Nome, newUsuario.Codigo, newUsuario.CPF.Substring(0, 4));
    return CreatedAtAction(nameof(Get), new { id = newUsuario.Id }, message);
} */

    [HttpPost]
    public async Task<IActionResult> Post(Usuario newUsuario)
    {
        await _UsuariosService.CreateAsync(newUsuario);

        return CreatedAtAction(nameof(Get), new { id = newUsuario.Id }, newUsuario);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Usuario updatedUsuario)
    {
        var usuario = await _UsuariosService.GetAsync(id);

        if (usuario is null)
        {
            return NotFound();
        }

        updatedUsuario.Id = usuario.Id;

        await _UsuariosService.UpdateAsync(id, updatedUsuario);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var usuario = await _UsuariosService.GetAsync(id);

        if (usuario is null)
        {
            return NotFound();
        }

        await _UsuariosService.RemoveAsync(id);

        return NoContent();
    }
}