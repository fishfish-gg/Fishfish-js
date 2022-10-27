export enum ErrorsMessages {
	API_KEY_UNAUTHORIZED = 'The API key provided is invalid or does not have the required permissions.',
	CACHE_DISABLED = "Cannot get cache because it's explicitly disabled.",
	INVALID_TYPE = 'Expected a string but received: ',
	MISSING_CATEGORY = 'You need to provide a category to fetch all entries.',
	MISSING_DEFAULT_PERMISSIONS = 'You need to provide at least one permission for the session token.',
	MISSING_FIELD_CREATE = 'The category and description fields are required when creating a new entry.',
	MISSING_FIELD_UPDATE = 'You need to provide at least one field to update.',
	RATE_LIMITED = 'You are being rate limited.',
	SESSION_TOKEN_UNAUTHORIZED = 'The session token provided is invalid or has expired.',
}