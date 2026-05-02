import { getModelsModel, getModelByIdModel } from "../models/modelsModel.ts";
import { sqlInjection } from "../utils/helpers.ts";

async function getModelsController() {
    try {
        const models = await getModelsModel();
        return { data: models };
    } catch (error) {
        return { error };
    }
}

async function getModelByIdController(id: string) {
    try {
        const safeId = sqlInjection(id);
        const models = await getModelByIdModel(safeId);
        return { data: models };
    } catch (error) {
        return { error };
    }
}

export { getModelsController, getModelByIdController }
