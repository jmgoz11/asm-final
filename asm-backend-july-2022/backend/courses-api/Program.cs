using CoursesApi.Adapters;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var connectionString = builder.Configuration.GetConnectionString("mongodb");
var mongoAdapter = new MongoDbCoursesAdapter(connectionString);
builder.Services.AddSingleton(mongoAdapter);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(opts =>
    {
        opts.PreSerializeFilters.Add((swagger, httpReq) =>
    {
        if (httpReq.Headers.ContainsKey("X-Forwarded-Host"))
        {

            var basePath = "api/references/courses";
            var serverUrl = $"{httpReq.Scheme}://{httpReq.Headers["X-Forwarded-Host"]}/{basePath}";
            swagger.Servers = new List<OpenApiServer> { new OpenApiServer { Url = serverUrl } };
        }
    });
    });
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
