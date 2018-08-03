export class Model {

    constructor(model = null) {
        if (model) {
            Object.assign(this,  model);
        }
    }
}
