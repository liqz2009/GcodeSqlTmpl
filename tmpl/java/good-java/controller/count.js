<% const now=new Date()%>
/// <summary>
/// <%=CountDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>

  @PostMapping("<%=CountControllerFunctionName%>")
  @ApiOperation("<%=CountDescription%>")
  @IUserLoginToken
  public Result <%=CountControllerFunctionName%>(<%if(CountParamsModelName){%>@RequestBody <%=CountParamsModelName%> pars<%}%> )
  {
      return Success(<%=TableName%>Service.<%=CountServiceFunctionName%>(<%if(CountParamsModelName){%>pars<%}%>));
  }



