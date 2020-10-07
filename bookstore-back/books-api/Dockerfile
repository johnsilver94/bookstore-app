FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://*:5000

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build
WORKDIR /src
COPY ["bookstore-back/books-api/books-api.csproj", "bookstore-back/"]
RUN dotnet restore "books-api/books-api.csproj"
COPY . .
WORKDIR "/src/bookstore-back/books-api"
RUN dotnet build "books-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "books-api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "books-api.dll"]