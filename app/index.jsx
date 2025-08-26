import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="flex-row justify-between items-center pt-12 px-4 pb-4">
        <View>
          <Text className="text-white text-xl font-bold">Smart Lock</Text>
          <Text className="text-gray-400 text-sm">Welcome back, Alex</Text>
        </View>
        <TouchableOpacity className="bg-red-600 px-3 py-1 rounded-md">
          <Text className="text-white text-xs font-medium">Emergency</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Status Notifications */}
        <View className="mb-6">
          <View className="bg-yellow-900 border border-yellow-600 rounded-lg p-3 mb-2 flex-row items-center">
            <Ionicons name="warning" size={16} color="#FCD34D" />
            <View className="ml-3 flex-1">
              <Text className="text-yellow-200 text-sm">Office Door is in restricted mode</Text>
              <Text className="text-yellow-400 text-xs">5 min ago</Text>
            </View>
          </View>

          <View className="bg-yellow-900 border border-yellow-600 rounded-lg p-3 flex-row items-center">
            <Ionicons name="battery-half" size={16} color="#FCD34D" />
            <View className="ml-3 flex-1">
              <Text className="text-yellow-200 text-sm">Garage Door low battery (23%)</Text>
              <Text className="text-yellow-400 text-xs">2 hours ago</Text>
            </View>
          </View>
        </View>

        {/* Status Stats */}
        <View className="flex-row justify-between mb-6">
          <View className="items-center">
            <Text className="text-green-400 text-2xl font-bold">2</Text>
            <Text className="text-gray-400 text-xs">Online</Text>
          </View>
          <View className="items-center">
            <Text className="text-blue-400 text-2xl font-bold">2</Text>
            <Text className="text-gray-400 text-xs">Locked</Text>
          </View>
          <View className="items-center">
            <Text className="text-red-400 text-2xl font-bold">1</Text>
            <Text className="text-gray-400 text-xs">Low Battery</Text>
          </View>
          <View className="items-center">
            <Text className="text-purple-400 text-2xl font-bold">1</Text>
            <Text className="text-gray-400 text-xs">Restricted</Text>
          </View>
        </View>

        {/* Your Doors Header */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-lg font-semibold">Your Doors</Text>
          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="add" size={20} color="#22C55E" />
            <Text className="text-green-500 text-sm ml-1">Add Door</Text>
          </TouchableOpacity>
        </View>

        {/* Front Door */}
        <View className="bg-gray-900 rounded-lg p-4 mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <Text className="text-white text-lg font-medium">Front Door</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#9CA3AF" />
          </View>
          
          <View className="flex-row items-center mb-4">
            <Text className="text-red-500 bg-red-900 px-2 py-1 rounded text-xs mr-2">Locked</Text>
            <Text className="text-gray-400 text-sm">Battery: 85%</Text>
          </View>

          <TouchableOpacity className="bg-green-600 rounded-lg py-3 mb-4">
            <View className="flex-row items-center justify-center">
              <Ionicons name="lock-open" size={20} color="white" />
              <Text className="text-white font-medium ml-2">Unlock Door</Text>
            </View>
          </TouchableOpacity>

          <View className="space-y-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="phone-portrait" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Last access via NFC</Text>
              </View>
              <Text className="text-gray-400 text-sm">2 minutes ago</Text>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="location" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Auto-unlock nearby</Text>
              </View>
              <View className="w-12 h-6 bg-green-600 rounded-full p-1">
                <View className="w-4 h-4 bg-white rounded-full ml-auto" />
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="volume-off" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Silent mode</Text>
              </View>
              <View className="w-12 h-6 bg-gray-600 rounded-full p-1">
                <View className="w-4 h-4 bg-white rounded-full" />
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="time" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Auto-lock enabled (30s delay)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Office Door */}
        <View className="bg-gray-900 rounded-lg p-4 mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-green-500 rounded-full mr-3" />
              <Text className="text-white text-lg font-medium">Office Door</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#9CA3AF" />
          </View>
          
          <View className="flex-row items-center mb-4">
            <Text className="text-blue-500 bg-blue-900 px-2 py-1 rounded text-xs mr-2">Unlocked</Text>
            <Text className="text-purple-500 bg-purple-900 px-2 py-1 rounded text-xs mr-2">Restricted</Text>
            <Text className="text-gray-400 text-sm">Battery: 92%</Text>
          </View>

          <TouchableOpacity className="bg-red-600 rounded-lg py-3 mb-4">
            <View className="flex-row items-center justify-center">
              <Ionicons name="lock-closed" size={20} color="white" />
              <Text className="text-white font-medium ml-2">Lock Door</Text>
            </View>
          </TouchableOpacity>

          <View className="space-y-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="keypad" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Last access via PIN</Text>
              </View>
              <Text className="text-gray-400 text-sm">1 hour ago</Text>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="location" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Auto-unlock nearby</Text>
              </View>
              <View className="w-12 h-6 bg-green-600 rounded-full p-1">
                <View className="w-4 h-4 bg-white rounded-full ml-auto" />
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="volume-high" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Silent mode</Text>
              </View>
              <View className="w-12 h-6 bg-green-600 rounded-full p-1">
                <View className="w-4 h-4 bg-white rounded-full ml-auto" />
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="time" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Auto-lock enabled (30s delay)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Garage Door */}
        <View className="bg-gray-900 rounded-lg p-4 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <Text className="text-white text-lg font-medium">Garage Door</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#9CA3AF" />
          </View>
          
          <View className="flex-row items-center mb-4">
            <Text className="text-red-500 bg-red-900 px-2 py-1 rounded text-xs mr-2">Locked</Text>
            <Text className="text-gray-400 text-sm">Battery: 23%</Text>
          </View>

          <TouchableOpacity className="bg-green-600 rounded-lg py-3 mb-4">
            <View className="flex-row items-center justify-center">
              <Ionicons name="lock-open" size={20} color="white" />
              <Text className="text-white font-medium ml-2">Unlock Door</Text>
            </View>
          </TouchableOpacity>

          <View className="space-y-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="phone-portrait" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Last access via App</Text>
              </View>
              <Text className="text-gray-400 text-sm">1 day ago</Text>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="location" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Auto-unlock nearby</Text>
              </View>
              <View className="w-12 h-6 bg-gray-600 rounded-full p-1">
                <View className="w-4 h-4 bg-white rounded-full" />
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="volume-off" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2">Silent mode</Text>
              </View>
              <View className="w-12 h-6 bg-gray-600 rounded-full p-1">
                <View className="w-4 h-4 bg-white rounded-full" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;