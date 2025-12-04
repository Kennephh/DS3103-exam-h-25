using Microsoft.AspNetCore.Mvc;

namespace SportsWorldAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController(IWebHostEnvironment webHostEnvironment) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<string>> UploadImage(IFormFile img)
    {
        try
        {
            if (img == null || img.Length == 0) return BadRequest("No image.");

            var fileExt = Path.GetExtension(img.FileName);
            var fileName = $"{Guid.NewGuid()}{fileExt}";

            var imgPath = Path.Combine(webHostEnvironment.WebRootPath, "images");
            Directory.CreateDirectory(imgPath);
            var filePath = Path.Combine(imgPath, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await img.CopyToAsync(fileStream);
            }

            return Ok("/images/" + fileName);
        }
        catch
        {
            return StatusCode(500, "Error while uploading image.");
        }
    }
}