<%
function getType(type){
  if(type=='string'){
    return 'String'
  }
  return type
}
%>
package <%=EntityNamespace%> ;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import cn.hutool.core.date.DateTime;

@TableName("<%=tablename%>")
@ApiModel(value = "<%=TableName%>实体", description = "<%=tableComment%>")
public class <%=TableName%> implements Serializable {
  <% tableColumns.forEach(function(col) {%>
    /// <summary>
    /// <%=col.COLUMN_COMMENT%>
    /// </summary>
   <%if (col.COLUMN_KEY) { %> @TableId(value = "<%=col.COLUMN_NAME%>", type = IdType.AUTO)<%}else{%>
    @TableField(value = "<%=col.COLUMN_NAME%>")<%}%>
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
      return "<%=TableName%>{" +
      <% tableColumns.forEach(function(col) {%>
          "<%=col.COLUMN_NAME%>=" + <%=col.COLUMN_NAME%> +","+<%})%>
       "}";
   }
}
