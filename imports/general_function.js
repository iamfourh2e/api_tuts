export default class GeneralFn {
    static routes(method, path, fn ) {
        JsonRoutes.add(method, path,fn);
    }

    static sendResult = JsonRoutes.sendResult;
}