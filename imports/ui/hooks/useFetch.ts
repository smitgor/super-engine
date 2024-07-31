import { useState, useEffect } from 'react';

import { MeteorError } from '../shared/Types/meteor';

type CallbackFunction = {
    (error: MeteorError, result: any): void;
};

type UseFetchType = {
    (methodName: string, params: any[], callback?: CallbackFunction): any;
};

const useFetch: UseFetchType = (methodName, params = [], callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState<null | MeteorError>(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = () => {
            try {
                Meteor.call(
                    methodName,
                    ...params,
                    (error: MeteorError, result: any) => {
                        console.log('result', result, 'error', error);
                        if (!error) {
                            setApiData(result);
                        } else {
                            setServerError(error);
                        }

                        setIsLoading(false);
                        if (callback) {
                            callback(error, result);
                        }
                    }
                );
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { isLoading, apiData, serverError };
};

export default useFetch;
