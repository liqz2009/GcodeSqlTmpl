<% const now=new Date()%>
/// <summary>
/// <%=GetOneDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 @PostMapping("<%=GetOneControllerFunctionName%>")
 @ApiOperation("<%=GetOneDescription%>")
 @IUserLoginToken
public Result <%=GetOneControllerFunctionName%>(@RequestBody  <%=GetOneParamsModelName%> pars)
{
  return Success(<%=TableName%>Service.<%=GetOneServiceFunctionName%>(pars));
}
