using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSCourse.Startup))]
namespace AngularJSCourse
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
