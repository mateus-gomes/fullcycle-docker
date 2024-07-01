FROM golang:alpine AS builder

WORKDIR /myapp
COPY . .

RUN go build main.go

FROM scratch

COPY --from=builder /myapp/main /myapp/main

ENTRYPOINT ["/myapp/main"]