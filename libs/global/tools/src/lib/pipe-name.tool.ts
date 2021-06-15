export function pipeName(value, querier, customNameFn?) {
    if (value === undefined) {
        return '';
    }
    try {
        value = JSON.parse(JSON.stringify(value));
        // object
        if (isObject(value) && value.id) {
            // console.log('object', value);
            return pipeNameWithCustomFunction(value, customNameFn);
        }
        // array
        if (value && value.length && Array.isArray(value)) {
            const names = (value as string[])
                .filter((item: any) => item !== null)
                .map((item: any) => {
                    let objData;
                    if (isObject(item) && item.id) {
                        objData = querier.getEntity(item.id);
                    } else {
                        objData = querier.getEntity(item as string);
                    }
                    pipeNameWithCustomFunction(objData, customNameFn);
                });
            // console.log('array', value, names);
            return names.join(', ');
        } else {
            // console.log('string id only', value);
            const objData = querier.getEntity(value as string);
            return pipeNameWithCustomFunction(objData, customNameFn);
        }
    } catch (error) {
        // string
        // console.log('string', value, error, querier.getEntity(value));
        return (
            querier.getEntity(value) &&
            (customNameFn ? customNameFn(querier.getEntity(value)) : querier.getEntity(value).name)
        );
    }
}

function pipeNameWithCustomFunction(objValue, customNameFn) {
    try {
        return customNameFn ? customNameFn(objValue) : objValue.name;
    } catch (error) {
        console.warn('error', error);
        return '';
    }
}

export function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}
