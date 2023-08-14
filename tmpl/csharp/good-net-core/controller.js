using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using NetCoreClass;
using System.Net;
using System.Net.Http.Headers;

using <%=ModelsNamespace%>;
using  <%=EntityNamespace%>;
using <%=ServiceNamespace%>;
using <%=UnitOfWorkNamespace%>;
using <%=ModelsNamespace%>.Params;
using GoodDotNet.WebAdmin.HttpContextUser;


namespace <%=ControllerNamespace%>
{
  <% const now=new Date()%>
  /**
   *
   * @author <%=Author%>
   * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
   */
    [ApiController]
	[Route("api/[controller]")]
	public class <%=TableName%>Controller : BaseController
	{
      public <%=TableName%>Controller(IUser user, IHttpContextAccessor accessor, IOptions<List<ConnectionString>> conns, ILogger<BaseController> logger, IOptions<Appsettings> appsettings,IOptions<Audiences>audience) : base(user, accessor, conns, logger, appsettings)
            {
    		    }

	}
}
