<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=GetPageDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=GetPageControllerFunctionName%>")]
[Authorize]
public Result <%=GetPageControllerFunctionName%>([FromBody] <%=GetPageParamsModelName%> pars)
{
  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    var obj= service.<%=GetPageServiceFunctionName%>(pars);
		return Sucess(obj);
  }
}
