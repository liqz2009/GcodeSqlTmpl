<% const now=new Date()%>
/// <summary>
/// <%=InsertDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 @PostMapping("<%=InsertControllerFunctionName%>")
 @ApiOperation("<%=InsertDescription%>")
 @IUserLoginToken
public Result <%=InsertControllerFunctionName%>(@RequestBody <%=InsertParamsModelName%> pars)
{
  <%=TableName%>Service.<%=InsertServiceFunctionName%>(pars);
  return Success("添加成功");
}


