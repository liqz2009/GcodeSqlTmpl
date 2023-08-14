<% const now=new Date()%>
/// <summary>
/// <%=UpdateDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 @PostMapping("<%=UpdateControllerFunctionName%>")
 @ApiOperation("<%=UpdateDescription%>")
 @IUserLoginToken
public Result <%=UpdateControllerFunctionName%>(@RequestBody <%=UpdateParamsModelName%> pars)
{
  <%=TableName%>Service.<%=UpdateServiceFunctionName%>(pars);
  return Success("修改成功");
}
