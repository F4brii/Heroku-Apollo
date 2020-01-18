import User from '../database/models/User';
import Schedule from '../database/models/Schedule';
import Contact from '../database/models/Contact';

export const resolvers = {
    Query: {
      users: async () => { return await User.find() },
      schedules: async () => { return await Schedule.find() },
      contacts: async () => { return await Contact.find() },
      user: async (_, {input}) => { return await User.findOne({_id: input})},
      schedule: async (_, {input}) => { return await Schedule.findOne({_id: input}) },
      contact: async (_, {input}) => { return await Contact.findOne({_id: input}) },
      SchedulesUserId: async (_, {input}) => { return await Schedule.find({user: input}) },  
      ContactsScheduleId: async (_, {input}) => { return await Contact.find({user: input}) },  
    },
    Mutation: {
        createUser: async (_, {input}) => {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        createSchedule: async (_, {input}) => {
            const newSchedule = new Schedule({
                name: input.name,
                user: input.user
            });
            await newSchedule.save();
            return newSchedule;
        },
        createContact: async (_, {input}) => {
            const newContact = new Contact({
                name: input.name,
                number: input.number,
                schedule: input.schedule
            });
            await newContact.save();
            return newContact;
        },
        deleteUser: async (_, {input}) => {
            return await User.deleteOne({_id: input});
        },
        deleteSchedule: async (_, {input}) => {
            return await Schedule.deleteOne({_id: input});
        },
        deleteContact: async (_, {input}) => {
            return await Contact.deleteOne({_id: input});
        },
    },
  };