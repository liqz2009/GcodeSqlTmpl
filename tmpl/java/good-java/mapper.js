package <%=MapperNamespace%>;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.good.domain.entity.<%=TableName%>;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDateTime;
import java.util.HashMap;
<% const now=new Date()%>
/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author <%=Author%>
 * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 */
public interface <%=TableName%>Mapper extends BaseMapper<<%=TableName%>> {
}
