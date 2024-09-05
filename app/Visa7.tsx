import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import VisaHeader from '@/components/VisaHeader';
import CustomTabBar from '@/components/CustomTabBar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function VisaStatus() {
  return (
    <>
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Digital ID Status Section */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Digital ID Status</Text>

          <View style={styles.statusStepsContainer}>
            <View style={styles.statusStep}>
              <View style={styles.iconContainer}>
                <FontAwesome name="file-text-o" size={20} color="#FCC423" />
              </View>
              <Text style={styles.stepLabel}>Details</Text>
            </View>
            
            <View style={styles.line}></View>

            <View style={styles.statusStep}>
              <View style={styles.iconContainer}>
                <FontAwesome name="credit-card" size={20} color="#999" />
              </View>
              <Text style={styles.stepLabel}>Payment</Text>
            </View>
            
            <View style={styles.line}></View>

            <View style={styles.statusStep}>
              <View style={styles.iconContainer}>
                <FontAwesome name="search" size={20} color="#999" />
              </View>
              <Text style={styles.stepLabel}>Review</Text>
            </View>
            
            <View style={styles.line}></View>

            <View style={styles.statusStep}>
              <View style={styles.iconContainer}>
                <FontAwesome name="gavel" size={20} color="#999" />
              </View>
              <Text style={styles.stepLabel}>Decision Making</Text>
            </View>
          </View>

          {/* <View style={styles.statusSubSteps}>
            <View style={styles.subStep}>
              <Ionicons name="ios-paper-plane" size={20} color="#999" />
              <Text style={styles.subStepLabel}>Visa Issuance</Text>
            </View>
            <View style={styles.subLine}></View>
            <View style={styles.subStep}>
              <Ionicons name="ios-checkmark-circle" size={20} color="#999" />
              <Text style={styles.subStepLabel}>Complete</Text>
            </View>
          </View> */}
        
          <View style={styles.statusSubSteps}>
          <View style={styles.line}></View>
            <View style={styles.subStep}>
                <FontAwesome name="send-o" size={20} color="#999" />
                <Text style={styles.subStepLabel}>Visa Issuance</Text>
            </View>
            <View style={styles.subLine}></View>
            <View style={styles.subStep}>
                <FontAwesome name="check-circle-o" size={20} color="#999" />
                <Text style={styles.subStepLabel}>Complete</Text>
            </View>
            </View>

        </View>

        {/* Details Submitted Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Details Submitted Successfully!</Text>
          <Text style={styles.sectionSubtitle}>
            We've received the following information for your Visa Application. Please ensure everything is correct before we proceed with the review.
          </Text>

          {/* Personal Information Section */}
          <View style={styles.personalInfoContainer}>
            <Text style={styles.infoTitle}>Personal Information</Text>
            <Text style={styles.infoText}>Full : John Doe</Text>
            <Text style={styles.infoText}>Date of Birth : 1987-05-18</Text>
            <Text style={styles.infoText}>Gender : Male</Text>
            <Text style={styles.infoText}>Nationality : Australian</Text>
            <Text style={styles.infoText}>Place of Birth : National Hospital</Text>
            <Text style={styles.infoText}>Marital Status : Married</Text>
            <Text style={styles.infoText}>Residential Address : No.123,Rose Road, Town Square</Text>
            <Text style={styles.infoText}>Phone Number : +04 123 456 789</Text>
            <Text style={styles.infoText}>Email Address : john@xyz.com</Text>
          </View>
        </View>
      </ScrollView>
      <CustomTabBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  statusContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f9f9f9',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FCC423',
    marginBottom: 15,
  },
  statusStepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusStep: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 2,
  },
  stepLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },
  line: {
    height: 3,
    backgroundColor: '#ddd',
    flex: 1,
    marginHorizontal: 10,
  },
  statusSubSteps: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  subStep: {
    alignItems: 'center',
  },
  subStepLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    textAlign: 'center',
  },
  subLine: {
    width: 60,
    height: 2,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  detailsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  personalInfoContainer: {
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});
