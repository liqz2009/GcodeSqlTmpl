using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace <%=EntityNamespace%>
{
  <% const now=new Date()%>
  /**
   *<%=tableComment%>
   * @author <%=Author%>
   * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
   */
 
	 [Table("<%=tablename%>")]
	public class <%=TableName%>:IEntity{
		<% tableColumns.forEach(function(col){ %>
		/// <summary>
		/// <%=col.COLUMN_COMMENT%>
		/// </summary>
		<% if(col.COLUMN_KEY){%>
		[Key]
		<%}%>
	[Column("<%=col.COLUMN_NAME%>")]
	public <%=col.DATA_TYPE%><%if(!col.IS_NULLABLE){%>?<%}%> <%=col.ALIAS_NAME%>{ get; set; }
		<%});%>
	}
}
