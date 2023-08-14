<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=GetListDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=GetListControllerFunctionName%>")]
[Authorize]
public Result <%=GetListControllerFunctionName%>(<% if(GetListParamsModelName) {%>[FromBody] <%=GetListParamsModelName%> pars <%}%>)
{
  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    var obj= service.<%=GetListServiceFunctionName%>(<% if(GetListParamsModelName) {%>pars<%}%>);
    return Sucess(obj);
  }
}
