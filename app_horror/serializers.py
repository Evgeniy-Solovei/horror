from adrf.fields import SerializerMethodField
from adrf.serializers import ModelSerializer, Serializer
from app_horror.models import Horror, TimeSlot, Booking, Photo


class PhotoSerializer(ModelSerializer):
    """Сериализатор для фотографий"""
    class Meta:
        model = Photo
        fields = ["image"]

class HorrorSerializer(ModelSerializer):
    """Сериализатор для модели Horror с фотографиями"""
    photos = SerializerMethodField()

    class Meta:
        model = Horror
        fields = "__all__"

    def get_photos(self, obj):
        """Метод для получения всех фотографий, связанных с Horror"""
        photos = obj.photos.all()  # Получаем все фотографии
        return PhotoSerializer(photos, many=True).data  # Сериализуем фотографии


class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"


class TimeSlotSerializer(ModelSerializer):
    class Meta:
        model = TimeSlot
        fields = "__all__"
