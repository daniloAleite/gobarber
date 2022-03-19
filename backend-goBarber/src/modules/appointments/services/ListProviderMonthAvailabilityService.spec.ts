import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeApointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppoimentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppoimentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppoimentsRepository,
    );
  });
  it('should be able to list the month availability from provider', async () => {
    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 5, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 6, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 7, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 8, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 9, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 10, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 11, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 12, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 13, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 14, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 20, 15, 0, 0),
    });

    await fakeAppoimentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 3, 21, 5, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2022,
      month: 3,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
