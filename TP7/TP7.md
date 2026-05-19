# Registre privé (TP7)

```
registry-1  | time="2026-05-18T06:50:06Z" level=warning msg="Ignoring unrecognized environment variable REGISTRY_LOG_OTLP"
registry-1  | time="2026-05-18T06:50:06.039439959Z" level=debug msg="using \"text\" logging formatter"
registry-1  | time="2026-05-18T06:50:06.054030558Z" level=warning msg="No HTTP secret provided - generated random secret. This may cause problems with uploads if multiple registries are behind a load-balancer. To provide a shared secret, fill in http.secret in the configuration file or set the REGISTRY_HTTP_SECRET environment variable." environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1  | time="2026-05-18T06:50:06.054650227Z" level=info msg="redis not configured" environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1  | time="2026-05-18T06:50:06.054806061Z" level=info msg="using inmemory blob descriptor cache" environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1  | time="2026-05-18T06:50:06.05508152Z" level=info msg="providing prometheus metrics on /metrics"
registry-1  | time="2026-05-18T06:50:06.056103899Z" level=info msg="listening on [::]:5000" environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1  | time="2026-05-18T06:50:06.054577768Z" level=info msg="Starting upload purge in 11m0s" environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1  | time="2026-05-18T06:50:06.056279025Z" level=info msg="debug server listening :5001"
registry-ui-1  | 
registry-ui-1  |    ____    __
registry-ui-1  |   / __/___/ /  ___
registry-ui-1  |  / _// __/ _ \/ _ \
registry-ui-1  | /___/\__/_//_/\___/ v4.15.0
registry-ui-1  | High performance, minimalist Go web framework
registry-ui-1  | https://echo.labstack.com
registry-ui-1  | ____________________________________O/_______
registry-ui-1  |                                     O\
registry-ui-1  | time="2026-05-18T06:50:06Z" level=info msg="[RefreshCatalog] Started reading catalog..." logger=registry.client
registry-ui-1  | ⇨ http server started on [::]:8000
registry-ui-1  | time="2026-05-18T06:50:06Z" level=info msg="[RefreshCatalog] Job complete (29.190657ms): 1 repos found" logger=registry.client

registry-1     | time="2026-05-18T06:50:06.244282349Z" level=debug msg="authorizing request" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=3024a123-1748-457a-ab71-1d64c88a6ec3 http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri=/v2/ http.request.useragent="registry-ui go-containerregistry/v0.20.7" instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1     | time="2026-05-18T06:50:06.244395474Z" level=info msg="response completed" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=3024a123-1748-457a-
registry-1     | time="2026-05-18T06:50:06.245309561Z" level=debug msg="authorizing request" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=2a8408c6-7477-4f0c-aaf0-0b8305931bde http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri="/v2/_catalog?n=100" http.request.useragent="registry-ui go-containerregistry/v0.20.7" instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1     | 192.168.156.3 - - [18/May/2026:06:50:06 +0000] "GET /v2/ HTTP/1.1" 200 2 "" "registry-ui go-containerregistry/v0.20.7"
registry-1     | 192.168.156.3 - - [18/May/2026:06:50:06 +0000] "GET /v2/_catalog?n=100 HTTP/1.1" 200 33 "" "registry-ui go-containerregistry/v0.20.7"
registry-1     | time="2026-05-18T06:50:06.248016072Z" level=info msg="response completed" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=2a8408c6-7477-4f0c-aaf0-0b8305931bde http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri="/v2/_catalog?n=100" http.request.useragent="registry-ui go-containerregistry/v0.20.7" http.response.contenttype=application/json http.response.duration=2.724261ms http.response.status=200 http.response.written=33 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-ui-1  | time="2026-05-18T06:50:06Z" level=info msg="[RefreshTags] Job complete (6.889485ms)." logger=registry.client
registry-1     | 192.168.156.3 - - [18/May/2026:06:50:06 +0000] "GET /v2/ HTTP/1.1" 200 2 "" "registry-ui go-containerregistry/v0.20.7"
registry-1     | time="2026-05-18T06:50:06.252145546Z" level=debug msg="authorizing request" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=8b89c51c-cc6c-46fa-ad9c-34ec2a8dbf5f http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri=/v2/ http.request.useragent="registry-ui go-containerregistry/v0.20.7" instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1     | time="2026-05-18T06:50:06.252270505Z" level=info msg="response completed" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=8b89c51c-cc6c-46fa-ad9c-34ec2a8dbf5f http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri=/v2/ http.request.useragent="registry-ui go-containerregistry/v0.20.7" http.response.contenttype=application/json http.response.duration="221.376µs" http.response.status=200 http.response.written=2 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1     | time="2026-05-18T06:50:06.254016262Z" level=debug msg="authorizing request" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=5a65ead8-e5ad-4713-b9e3-d4cdc2a57215 http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri="/v2/hello-world/tags/list?n=100" http.request.useragent="registry-ui go-containerregistry/v0.20.7" instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry vars.name=hello-world version=3.0.0
registry-1     | time="2026-05-18T06:50:06.254626181Z" level=info msg="response completed" environment=development go.version=go1.23.7 http.request.host="registry:5000" http.request.id=5a65ead8-e5ad-4713-b9e3-d4cdc2a57215 http.request.method=GET http.request.remoteaddr="192.168.156.3:58638" http.request.uri="/v2/hello-world/tags/list?n=100" http.request.useragent="registry-ui go-containerregistry/v0.20.7" http.response.contenttype=application/json http.response.duration="746.503µs" http.response.status=200 http.response.written=41 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry vars.name=hello-world version=3.0.0
registry-1     | 192.168.156.3 - - [18/May/2026:06:50:06 +0000] "GET /v2/hello-world/tags/list?n=100 HTTP/1.1" 200 41 "" "registry-ui go-containerregistry/v0.20.7"
registry-1     | time="2026-05-18T06:50:11.066914207Z" level=error msg="traces export: Post \"https://localhost:4318/v1/traces\": dial tcp [::1]:4318: connect: connection refused" environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
registry-1     | time="2026-05-18T06:50:21.067649449Z" level=error msg="traces export: Post \"https://localhost:4318/v1/traces\": dial tcp [::1]:4318: connect: connection refused" environment=development go.version=go1.23.7 instance.id=168b5eaf-c6a2-4b07-9b58-198c1a24a6e0 service=registry version=3.0.0
```