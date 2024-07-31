interface MeteorError {
    error: string | number;
    reason?: string;
    details?: string;
}

interface Test {
    error: string | number;
    reason?: string;
    details?: string;
}

export { MeteorError, Test };
