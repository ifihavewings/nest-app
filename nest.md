# 创建用户模块
nest generate module users

# 创建用户实体
nest generate class users/user --no-spec

# 创建用户控制器
nest generate controller users --no-spec

# 创建用户服务
nest generate service users --no-spec

# 创建 DTO 目录和文件
mkdir -p src/users/dto
touch src/users/dto/create-user.dto.ts
touch src/users/dto/update-user.dto.ts