import { getBrandsModel } from "../models/brandsModel.ts";
import { sqlInjection } from "../utils/helpers.ts";


async function getBrandsController() {
    try {
        const brands = await getBrandsModel();
        return { data: brands };
    } catch (error) {
        return { error };
    }
}

export { getBrandsController }