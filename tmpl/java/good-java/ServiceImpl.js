package <%=ServiceNamespace%>;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import com.good.domain.entity.<%=TableName%>;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.good.domain.mapper.<%=TableName%>Mapper;
import com.good.domain.service.<%=TableName%>IService;
<% const now=new Date()%>
/**
 * <p>
 *  服务实现类
 * </p>
 * <%=tableComment%>
 * @author <%=Author%>
 * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 */
@Service
public class <%=TableName%>ServiceImpl extends ServiceImpl<<%=TableName%>Mapper,<%=TableName%>> implements <%=TableName%>IService {
      @Autowired
      private <%=TableName%>Mapper _<%=TableName%>Mapper;
}
