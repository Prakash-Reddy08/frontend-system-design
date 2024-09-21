const PROTO_PATH = "./customers.proto"

import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
})

const customersProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server();

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, {
            customers: [{
                id: "1",
                name: "dkslfjksdf",
                age: 3,
                address: "kdlsjfsldkfj",
            }]
        })
    },
    get: (call, callback) => {

    },
    insert: (call, callback) => {

    },
    update: (call, callback) => {

    },
    delete: (call, callback) => {

    },
})

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(`Error Starting gRPC: ${err}`)
    } else {
        server.start();
        console.log(`gRPC server listening on port ${port}`)
    }
})