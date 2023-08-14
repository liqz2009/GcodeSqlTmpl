package <%=ModelsNamespace %> ;

import java.io.Serializable;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
<%
const now=new Date()
function getType(type){
  if(type=='string'){
    return 'String'
  }
  return type
}
%>
/**
 *
 * @author <%=Author%>
 * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 */
@ApiModel("<%=ModelsName%>")
public class <%=ModelsName%>  {
  <% tableColumns.forEach(function(col) {%>
    <% if(col.COLUMN_COMMENT){%>@ApiModelProperty("<%=col.COLUMN_COMMENT%>")<%}%>
    private <%=getType(col.DATA_TYPE)%> <%=col.COLUMN_NAME %>;
    public <%=getType(col.DATA_TYPE)%> get<%=col.ALIAS_NAME%>() {
      return <%=col.COLUMN_NAME%>;
    }
    public void set<%=col.ALIAS_NAME%>(<%=getType(col.DATA_TYPE)%> <%=col.COLUMN_NAME%>) {
      this.<%=col.COLUMN_NAME%> = <%=col.COLUMN_NAME%>;
    }
  <%})%>
   @Override
   public String toString() {
      return "<%=ModelsName%>{" +
      <% tableColumns.forEach(function(col) {%>
          "<%=col.ALIAS_NAME%>=" + <%=col.COLUMN_NAME%> +","+
      <%})%>
       "}";
   }
}
