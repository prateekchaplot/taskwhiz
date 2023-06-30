using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly string _frontendUri;

    public AuthController(IConfiguration configuration)
    {
        _frontendUri = configuration.GetValue<string>("AppSettings:FrontendURI") ?? string.Empty;
    }

    [HttpPost("[action]")]
    public IActionResult CallbackFromGoogle([FromForm] string g_csrf_token, [FromForm] string credential)
    {
        // Parse the JWT token
        var jwtTokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
        var jwtToken = jwtTokenHandler.ReadJwtToken(credential);

        // Extract properties from the JWT token
        var issuer = jwtToken.Issuer;
        var audience = jwtToken.Audiences.FirstOrDefault();
        var subject = jwtToken.Subject;
        var email = jwtToken.Claims.FirstOrDefault(c => c.Type == "email")?.Value;
        var emailVerified = jwtToken.Claims.FirstOrDefault(c => c.Type == "email_verified")?.Value;
        var name = jwtToken.Claims.FirstOrDefault(c => c.Type == "name")?.Value;
        var pictureUrl = jwtToken.Claims.FirstOrDefault(c => c.Type == "picture")?.Value;
        var givenName = jwtToken.Claims.FirstOrDefault(c => c.Type == "given_name")?.Value;
        var iat = jwtToken.Claims.FirstOrDefault(c => c.Type == "iat")?.Value;
        var exp = jwtToken.Claims.FirstOrDefault(c => c.Type == "exp")?.Value;
        var jti = jwtToken.Claims.FirstOrDefault(c => c.Type == "jti")?.Value;

        return Redirect($"{_frontendUri}/login?token={credential}");
    }
}
