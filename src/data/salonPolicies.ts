export interface IPolicySection {
    title: string;
    content: string;
}

export interface ISalonPolicies {
    title: string;
    sections: IPolicySection[];
}

export const salonPolicies: ISalonPolicies = {
    title: 'Salon Policies',
    sections: [
        {
            title: 'Appointment Reservations & Credit Card Policy',
            content: `To secure an appointment, all clients are required to provide a valid credit card at the time of booking. Your card will be securely kept on file and will only be charged in accordance with our cancellation, no-show, or late-arrival policies.\n\nThis policy allows us to reserve your time with our stylists and ensures availability for all guests. We appreciate your understanding and cooperation.`
        },
        {
            title: 'Cancellations & Appointment Adjustments',
            content: `We understand that schedules may occasionally shift. Out of respect for our stylists’ time and the experience of all guests, we kindly require a minimum of 24 hours’ notice for any appointment cancellations or service adjustments.\n\nAppointments canceled or changed within 24 hours of the scheduled time, as well as no-shows, will be subject to a 50% charge of the reserved service.\n\nAppointments canceled the day of the scheduled service, will be subject to a 100% charge of the reserved service.\n\nThis allows us to thoughtfully manage our schedule and continue providing a high level of service.`
        },
        {
            title: 'No-Call / No-Show Policy',
            content: `Out of respect for our stylists’ time and the availability of our services, any appointment that is missed without notice will be considered a no-call, no-show. In these instances, 100% of the scheduled service cost will be charged.\n\nThis policy ensures that our team is compensated for the time reserved and allows us to continue delivering an elevated experience for all guests.`
        },
        {
            title: 'Late Arrival Policy',
            content: `We kindly ask that clients arrive on time for their scheduled appointments. If you anticipate running late, please contact the salon as soon as possible.\n\nArrivals exceeding 15 minutes may require us to shorten or forfeit the appointment entirely to respect the schedules of our stylists and other guests. In the event that an appointment must be canceled due to late arrival, the applicable cancellation fee will apply.`
        },
        {
            title: 'Service Adjustments',
            content: `We strive to provide the highest level of service and take great pride in our work. If you wish to have a color or toner adjusted, we kindly ask that you contact the salon within five days of your original appointment so we may best address your concerns.\n\nService adjustments are offered at the discretion of the salon and must be scheduled within a reasonable timeframe. Requests made beyond this period may be subject to additional charges.`
        },
        {
            title: 'Guests & Children Policy',
            content: `For the safety of your children and to preserve the relaxation of all guests, we kindly ask that no children, additional guests, or animals accompany you to your appointment unless they are receiving a scheduled service.\n\nThis policy allows us to maintain a calm, safe, and elevated salon environment. We appreciate your understanding and cooperation.`
        }
    ]
};

export default salonPolicies;