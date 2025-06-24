export interface Patient {
    name: string;
    age: number;
    sex: 'Female' | 'Male';
    address: string;
    insuranceNumber: string,
    medicalHistory: string;
    allergies: string;
    currentMedications: string;
}
