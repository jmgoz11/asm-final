using System.ComponentModel.DataAnnotations;
using CoursesApi.Adapters;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
namespace CoursesApi.Controllers;

[ApiController]
[Route("")]
public class CoursesController : ControllerBase
{

    private readonly MongoDbCoursesAdapter _adapter;

    public CoursesController(MongoDbCoursesAdapter adapter)
    {
        this._adapter = adapter;
    }

    [HttpGet]
    public async Task<ActionResult> GetAllCourses()
    {

       // await Task.Delay(3000);
        var projection = Builders<Course>.Projection.Expression(c => new CourseListItem
        {
            Id = c.Id.ToString(),
            Title = c.Title,
            Description = c.Description,
            NumberOfDays = c.NumberOfDays
        });
        var data = await _adapter.GetCoursesCollection().Find(_ => true).Project(projection).ToListAsync();
        return Ok(new { data = data });
    }

    [HttpPost()]
    public async Task<ActionResult> CreateCourse([FromBody] CourseCreateRequest course)
    {
        await Task.Delay(4000);
        var courseToCreate = new Course
        {
            Title = course.Title,
            Description = course.Description,
            NumberOfDays = course.NumberOfDays
        };

        await _adapter.GetCoursesCollection().InsertOneAsync(courseToCreate);

        var response = new CourseListItem
        {
            Id = courseToCreate.Id.ToString(),
            Title = courseToCreate.Title,
            Description = courseToCreate.Description,
            NumberOfDays = courseToCreate.NumberOfDays
        };
        return StatusCode(201, response);

    }
}

public record CourseListItem
{
    public string Id { get; init; } = string.Empty;
    public string Title { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public int NumberOfDays { get; init; }
}

public record CourseCreateRequest
{
    [Required]
    public string Title { get; init; } = string.Empty;
    [Required]
    public string Description { get; init; } = string.Empty;
    [Range(1, 14)]
    public int NumberOfDays { get; init; }
}