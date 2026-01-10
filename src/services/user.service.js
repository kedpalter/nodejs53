export const userService = {

    async avatarLocal(req) {
        return `This action avatarLocal`;
    },
    async avatarCloud(req) {
        return `This action avatarCloud`;
    },

    // ---------------------------------
    async create(req) {
        return `This action create`;
    },

    async findAll(req) {
        return `This action returns all user`;
    },

    async findOne(req) {
        return `This action returns a id: ${req.params.id} user`;
    },

    async update(req) {
        return `This action updates a id: ${req.params.id} user`;
    },

    async remove(req) {
        return `This action removes a id: ${req.params.id} user`;
    }
};