<%
var data = ''
if (GetOneDataModel) {
  let dataArr = GetOneDataModel.map(col => {
    return `"${col.COLUMN_NAME}"`
  })
  data = dataArr.join(",")
}%>
/// <summary>
/// <%=GetOneDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toISOString().replace('T', ' ').substring(0, 19);%>
public <%=TableName %> <%= GetOneServiceFunctionName %>(<%= GetOneParamsModelName %> pars) {
  QueryWrapper<<%=TableName%>> queryWrapper = new QueryWrapper<>();
  <% GetOneParamsModel.forEach(function(col) { %>
  queryWrapper.eq("<%=col.COLUMN_NAME%>", pars.get<%=col.ALIAS_NAME %>()); <%})%>
  <% if (data) {%> queryWrapper.select(<%-data-%>); <%}%>
  return _<%= TableName%>Mapper.selectOne(queryWrapper);
}
