<% const now=new Date()%>
/// <summary>
/// <%=GetListDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 @PostMapping("<%=GetListControllerFunctionName%>")
 @ApiOperation("<%=GetListDescription%>")
 @IUserLoginToken
public Result <%=GetListControllerFunctionName%>(<% if(GetListParamsModelName) {%> @RequestBody <%=GetListParamsModelName%> pars<%}%> )
{
   return Success(<%=TableName%>Service.<%=GetListServiceFunctionName%>(<% if(GetListParamsModelName) {%> pars <%}%>));
}
