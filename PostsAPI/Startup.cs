using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PlaceholderServices = PostsAPI.JSONPlaceholder.Services;
using PlaceholderInterfaces = PostsAPI.JSONPlaceholder.Services.Interfaces;
using PostsAPI.Services.Interfaces;
using System;
using Newtonsoft.Json.Serialization;

namespace TodoAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddResponseCaching();
            services.AddMemoryCache();
            services.AddResponseCompression();

            services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver())
                            .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddHttpClient<PlaceholderInterfaces.IUserService, PlaceholderServices.UserService>(c =>
            {
                c.BaseAddress = new Uri(Configuration.GetSection("AppSettings:JSONPlaceholderBaseUrl").Value);
            });

            services.AddHttpClient<PlaceholderInterfaces.ICommentService, PlaceholderServices.CommentService>(c =>
            {
                c.BaseAddress = new Uri(Configuration.GetSection("AppSettings:JSONPlaceholderBaseUrl").Value);
            });

            services.AddHttpClient<PlaceholderInterfaces.IPostService, PlaceholderServices.PostService>(c =>
            {
                c.BaseAddress = new Uri(Configuration.GetSection("AppSettings:JSONPlaceholderBaseUrl").Value);
            });

            services.AddScoped<IPostService, PostService>();            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            //app.UseResponseCaching();
            app.UseResponseCompression();
            app.UseMvc();
        }
    }
}
