 <% const now=new Date()%>
 /// <summary>
  /// <%=DeleteDescription%>
  /// </summary>
  /// <returns></returns>
  /// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
  @PostMapping("<%=DeleteControllerFunctionName%>")
  @ApiOperation("<%=DeleteDescription%>")
  @IUserLoginToken

public Result <%=DeleteControllerFunctionName%>(@RequestBody <%=DeleteParamsModelName%> pars)
{
  <%=TableName%>Service.<%=DeleteServiceFunctionName%>(pars);
  return Success("删除成功");
}
