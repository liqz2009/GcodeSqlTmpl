<% const now=new Date()%>
/// <summary>
/// <%=GetPageDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 @PostMapping("<%=GetPageControllerFunctionName%>")
 @ApiOperation("<%=GetPageDescription%>")
 @IUserLoginToken
public Result <%=GetPageControllerFunctionName%>(@RequestBody  <%=GetPageParamsModelName%> pars)
{
  return Success(<%=TableName%>Service.<%=GetPageServiceFunctionName%>(pars));
}
