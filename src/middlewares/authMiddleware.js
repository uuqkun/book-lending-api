import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        res.status.json({
            errors: "Unauthorized admin"
        }).end()
    } else {
        const userAdmin = await prismaClient.user.findFirst({
            where: {
                AND: {
                    role: 'admin', 
                    token: token
                }
            }
        });

        if (!userAdmin) {
            res.status(401).json({
                errors: 'Unauthorized admin'
            });
        } else {
            logger.info(req.user);
            req.user = userAdmin;
            next()
        }
    }
}