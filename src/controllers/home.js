import { testEnvVariable } from '../settings';

export const indexPageController = (req, res) => res.status(200).json({ message: testEnvVariable });
