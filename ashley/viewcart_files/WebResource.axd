var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            

            var OrderConfirmationClass = (function () {
                function OrderConfirmationClass() {
                }
                return OrderConfirmationClass;
            })();
            Controls.OrderConfirmationClass = OrderConfirmationClass;

            var ShoppingCartDataLevel = (function () {
                function ShoppingCartDataLevel() {
                }
                ShoppingCartDataLevel.Minimal = 0;

                ShoppingCartDataLevel.Extended = 1;

                ShoppingCartDataLevel.All = 2;
                return ShoppingCartDataLevel;
            })();
            Controls.ShoppingCartDataLevel = ShoppingCartDataLevel;
            ;

            var TransactionItemType = (function () {
                function TransactionItemType() {
                }
                TransactionItemType.None = 0;

                TransactionItemType.Kit = 1;

                TransactionItemType.KitComponent = 2;
                return TransactionItemType;
            })();
            Controls.TransactionItemType = TransactionItemType;

            var PageMode = (function () {
                function PageMode() {
                }
                PageMode.Shipping = "shipping";

                PageMode.Billing = "billing";

                PageMode.Payment = "payment";

                PageMode.Confirm = "confirm";

                PageMode.cartview = "cartviewpagemode";

                PageMode.thankyou = "thankyou";
                return PageMode;
            })();
            Controls.PageMode = PageMode;

            var UserPageMode = (function () {
                function UserPageMode(o) {
                    o = o || {};
                    this.PageMode = o.PageMode;
                }
                return UserPageMode;
            })();
            Controls.UserPageMode = UserPageMode;

            var PageModeOptions = (function () {
                function PageModeOptions() {
                }
                PageModeOptions.CartView = 0;
                PageModeOptions.ShippingView = 1;
                PageModeOptions.ShippingViewCompleted = 2;
                PageModeOptions.BillingView = 3;
                PageModeOptions.BillingViewcompleted = 4;
                PageModeOptions.PaymentView = 5;
                PageModeOptions.PaymentViewCompleted = 6;
                PageModeOptions.ConfirmView = 7;
                PageModeOptions.ConfirmViewCompleted = 8;
                PageModeOptions.ThankYou = 9;
                return PageModeOptions;
            })();
            Controls.PageModeOptions = PageModeOptions;

            var PageStatus = (function () {
                function PageStatus() {
                }
                PageStatus.Complete = 1;

                PageStatus.Incomplete = 2;
                return PageStatus;
            })();
            Controls.PageStatus = PageStatus;

            (function (LoyaltyCardTenderType) {
                LoyaltyCardTenderType[LoyaltyCardTenderType["AsCardTender"] = 0] = "AsCardTender";

                LoyaltyCardTenderType[LoyaltyCardTenderType["AsContactTender"] = 1] = "AsContactTender";

                LoyaltyCardTenderType[LoyaltyCardTenderType["NoTender"] = 2] = "NoTender";

                LoyaltyCardTenderType[LoyaltyCardTenderType["Blocked"] = 3] = "Blocked";
            })(Controls.LoyaltyCardTenderType || (Controls.LoyaltyCardTenderType = {}));
            var LoyaltyCardTenderType = Controls.LoyaltyCardTenderType;

            var ShoppingCartType = (function () {
                function ShoppingCartType() {
                }
                ShoppingCartType.None = 0;

                ShoppingCartType.Shopping = 1;

                ShoppingCartType.Checkout = 2;
                return ShoppingCartType;
            })();
            Controls.ShoppingCartType = ShoppingCartType;

            var AddressType = (function () {
                function AddressType() {
                }
                AddressType.Delivery = 2;

                AddressType.Payment = 5;

                AddressType.Invoice = 1;
                return AddressType;
            })();
            Controls.AddressType = AddressType;

            var AFMItemType = (function () {
                function AFMItemType() {
                }
                AFMItemType.Default = 0;

                AFMItemType.DeliveryServiceItem = 1;

                AFMItemType.ServiceItem = 2;
                return AFMItemType;
            })();
            Controls.AFMItemType = AFMItemType;

            (function (DeliveryPreferenceType) {
                DeliveryPreferenceType[DeliveryPreferenceType["None"] = 0] = "None";

                DeliveryPreferenceType[DeliveryPreferenceType["ShipToAddress"] = 1] = "ShipToAddress";

                DeliveryPreferenceType[DeliveryPreferenceType["PickupFromStore"] = 2] = "PickupFromStore";

                DeliveryPreferenceType[DeliveryPreferenceType["ElectronicDelivery"] = 3] = "ElectronicDelivery";

                DeliveryPreferenceType[DeliveryPreferenceType["DeliverItemsIndividually"] = 4] = "DeliverItemsIndividually";
            })(Controls.DeliveryPreferenceType || (Controls.DeliveryPreferenceType = {}));
            var DeliveryPreferenceType = Controls.DeliveryPreferenceType;

            

            

            

            

            

            

            

            

            

            

            

            

            

            var ListingClass = (function () {
                function ListingClass(o) {
                    o = o || {};
                    this.ListingId = o.ListingId;
                    this.ProductDetails = o.ProductDetails;
                    this.KitComponentDetails = o.KitComponentDetails;
                    this.ItemId = o.ItemId;
                    this.AFMKitItemId = o.AFMKitItemId;
                    this.AFMKitSequenceNumber = o.AFMKitSequenceNumber;
                    this.AFMKitProductId = o.AFMKitSequenceNumber;
                    this.AFMKitItemProductDetails = o.AFMKitSequenceNumber;
                    this.LineId = o.LineId;

                    this.Quantity = o.Quantity;
                }
                return ListingClass;
            })();
            Controls.ListingClass = ListingClass;

            var KitComponentInfoClass = (function () {
                function KitComponentInfoClass(o) {
                    o = o || {};
                    this.KitLineIdentifier = o.KitLineIdentifier;
                    this.KitLineProductId = o.KitLineProductId;
                    this.KitProductMasterId = o.KitProductMasterId;
                    this.Title = o.Title;
                    this.Unit = o.Unit;
                }
                return KitComponentInfoClass;
            })();
            Controls.KitComponentInfoClass = KitComponentInfoClass;

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            var AFMAddressData = (function () {
                function AFMAddressData(o) {
                    o = o || {};
                    this.ErrorMessage = o.ErrorMessage;
                    this.IsAddressValid = o.IsAddressValid;
                    this.suggestedAddress = o.suggestedAddress;
                    this.IsServiceVerified = o.IsServiceVerified;
                }
                return AFMAddressData;
            })();
            Controls.AFMAddressData = AFMAddressData;

            

            var AFMOrderSummary = (function () {
                function AFMOrderSummary(o) {
                    o = o || {};
                    this.SubtotalWithCurrency = o.SubtotalWithCurrency;
                    this.EstShipping = o.EstShipping;
                    this.EstHomeDelivery = o.EstHomeDelivery;
                    this.TaxAmountWithCurrency = o.TaxAmountWithCurrency;
                    this.TotalAmountWithCurrency = o.TotalAmountWithCurrency;
                }
                return AFMOrderSummary;
            })();
            Controls.AFMOrderSummary = AFMOrderSummary;

            var UserCartData = (function () {
                function UserCartData(o) {
                    o = o || {};
                    this.ShippingAddress = o.ShippingAddress;
                    this.PaymentAddress = o.PaymentAddress;
                    this.LineItems = o.LineItems;
                    this.OrderNumber = o.OrderNumber;
                    this.IsOkToText = o.IsOkToText;
                    this.IsOptinDeals = o.IsOptinDeals;
                }
                return UserCartData;
            })();
            Controls.UserCartData = UserCartData;

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            var CartProductDetailsClass = (function () {
                function CartProductDetailsClass(o) {
                    o = o || {};
                    this.Name = o.Name;
                    this.ProductUrl = o.ProductUrl;
                    this.ProductNumber = o.ProductNumber;
                    this.ImageUrl = o.ImageUrl;
                    this.Description = o.Description;
                    this.DimensionValues = o.DimensionValues;
                    this.SKU = o.SKU;
                    this.ImageMarkup = o.ImageMarkup;
                    this.Quantity = o.Quantity;
                }
                return CartProductDetailsClass;
            })();
            Controls.CartProductDetailsClass = CartProductDetailsClass;

            var SelectedShippingOptionsClass = (function () {
                function SelectedShippingOptionsClass(o) {
                    o = o || {};
                    this.DeliveryMethodId = o.DeliveryMethodId;
                    this.DeliveryMethodText = o.DeliveryMethodText;
                    this.ShippingOptionId = o.ShippingOptionId;
                    this.CustomAddress = o.CustomAddress;
                    this.StoreAddress = o.StoreAddress;
                    this.ElectronicDeliveryEmail = o.ElectronicDeliveryEmail;
                    this.ElectronicDeliveryEmailContent = o.ElectronicDeliveryEmailContent;
                }
                return SelectedShippingOptionsClass;
            })();
            Controls.SelectedShippingOptionsClass = SelectedShippingOptionsClass;

            var SelectedItemShippingOptionsClass = (function () {
                function SelectedItemShippingOptionsClass(o) {
                    o = o || {};
                    this.LineId = o.LineId;
                    this.Quantity = o.Quantity;
                    this.DeliveryMethodId = o.DeliveryMethodId;
                    this.DeliveryMethodText = o.DeliveryMethodText;
                    this.ShippingOptionId = o.ShippingOptionId;
                    this.CustomAddress = o.CustomAddress;
                    this.StoreAddress = o.StoreAddress;
                    this.ElectronicDeliveryEmail = o.ElectronicDeliveryEmail;
                    this.ElectronicDeliveryEmailContent = o.ElectronicDeliveryEmailContent;
                }
                return SelectedItemShippingOptionsClass;
            })();
            Controls.SelectedItemShippingOptionsClass = SelectedItemShippingOptionsClass;

            var SelectedLineDeliveryOptionClass = (function () {
                function SelectedLineDeliveryOptionClass(o) {
                    o = o || {};
                    this.LineId = o.LineId;
                    this.DeliveryModeId = o.DeliveryModeId;
                    this.DeliveryModeText = o.DeliveryModeText;
                    this.DeliveryPreferenceId = o.DeliveryPreferenceId;
                    this.CustomAddress = o.CustomAddress;
                    this.StoreAddress = o.StoreAddress;
                    this.ElectronicDeliveryEmail = o.ElectronicDeliveryEmail;
                    this.ElectronicDeliveryEmailContent = o.ElectronicDeliveryEmailContent;
                }
                return SelectedLineDeliveryOptionClass;
            })();
            Controls.SelectedLineDeliveryOptionClass = SelectedLineDeliveryOptionClass;

            var SelectedDeliveryOptionClass = (function () {
                function SelectedDeliveryOptionClass(o) {
                    o = o || {};
                    this.DeliveryModeId = o.DeliveryModeId;
                    this.DeliveryModeText = o.DeliveryModeText;
                    this.DeliveryPreferenceId = o.DeliveryPreferenceId;
                    this.CustomAddress = o.CustomAddress;
                    this.StoreAddress = o.StoreAddress;
                    this.ElectronicDeliveryEmail = o.ElectronicDeliveryEmail;
                    this.ElectronicDeliveryEmailContent = o.ElectronicDeliveryEmailContent;
                }
                return SelectedDeliveryOptionClass;
            })();
            Controls.SelectedDeliveryOptionClass = SelectedDeliveryOptionClass;

            var ImageInfoClass = (function () {
                function ImageInfoClass(o) {
                    o = o || {};
                    this.Url = o.Url;
                    this.AltText = o.AltText;
                }
                return ImageInfoClass;
            })();
            Controls.ImageInfoClass = ImageInfoClass;

            var TransactionItemClass = (function () {
                function TransactionItemClass(o) {
                    o = o || {};
                    this.LineId = o.LineId;
                    this.ItemType = o.ItemType;
                    if (o.KitComponents) {
                        this.KitComponents = [];
                        for (var i = 0; i < o.KitComponents.length; i++) {
                            this.KitComponents[i] = o.KitComponents[i] ? new TransactionItemClass(o.KitComponents[i]) : null;
                        }
                    }

                    if (o.SelectedDeliveryOption) {
                        this.SelectedDeliveryOption = o.SelectedDeliveryOption;
                    } else {
                        this.SelectedDeliveryOption = new SelectedDeliveryOptionClass(null);
                    }

                    this.ProductId = o.ProductId;
                    this.ProductNumber = o.ProductNumber;
                    this.ItemId = o.ItemId;
                    this.VariantInventoryDimensionId = o.VariantInventoryDimensionId;
                    this.Quantity = o.Quantity;
                    this.PriceWithCurrency = o.PriceWithCurrency;
                    this.TaxAmountWithCurrency = o.TaxAmountWithCurrency;
                    this.DiscountAmount = o.DiscountAmount;
                    this.DiscountAmountWithCurrency = o.DiscountAmountWithCurrency;
                    this.NetAmountWithCurrency = o.NetAmountWithCurrency;
                    this.ShippingAddress = o.ShippingAddress;
                    this.DeliveryModeId = o.DeliveryModeId;
                    this.DeliveryModeText = o.DeliveryModeText;
                    this.ElectronicDeliveryEmail = o.ElectronicDeliveryEmail;
                    if (o.PromotionLines) {
                        this.PromotionLines = [];
                        for (var i = 0; i < o.PromotionLines.length; i++) {
                            this.PromotionLines[i] = o.PromotionLines[i];
                        }
                    }

                    this.ProductDetailsExpanded = o.ProductDetailsExpanded;
                    this.ProductDetails = o.ProductDetails;
                    this.NoOfComponents = o.NoOfComponents;
                    this.Color = o.Color;
                    this.Style = o.Style;
                    this.Size = o.Size;
                    this.Name = o.Name;
                    this.Description = o.Description;
                    this.ProductUrl = o.ProductUrl;
                    this.Image = o.Image;
                    this.ImageMarkup = o.ImageMarkup;
                    this.OfferNames = o.OfferNames;
                    if (o.DeliveryPreferences) {
                        this.DeliveryPreferences = [];
                        for (var i = 0; i < o.DeliveryPreferences.length; i++) {
                            this.DeliveryPreferences[i] = o.DeliveryPreferences[i];
                        }
                    }

                    this.AFMVendorId = o.AFMVendorId;
                    this.AFMVendorName = o.AFMVendorName;
                    this.AFMShippingMode = o.AFMShippingMode;
                    this.IsEcommOwned = o.IsEcommOwned;
                    this.AFMCartLineATP = o.AFMCartLineATP;
                    this.PriceAfterDiscount = o.PriceAfterDiscount;
                    this.AFMKitItemId = o.AFMKitItemId;
                    this.AFMKitSequenceNumber = o.AFMKitSequenceNumber;
                    this.AFMKitProductId = o.AFMKitProductId;
                    this.AFMKitItemProductDetails = o.AFMKitItemProductDetails;
                    this.AFMKitItemQuantity = o.AFMKitItemQuantity;
                    this.AFMUnit = o.AFMUnit;
                    this.LineOrderNumber = o.LineOrderNumber;
                    this.AFMItemType = o.AFMItemType;
                    this.Listing = o.Listing;

                    this.AFMMultipleQty = o.AFMMultipleQty;
                    this.AFMLowestQty = o.AFMLowestQty;
                    this.AFMQtyPerBox = o.AFMQtyPerBox;
                    this.AFMQtyOptions = [];
                    if (this.AFMMultipleQty > 1 || this.AFMLowestQty > 1) {
                        for (var i = 1; i <= 10; i++) {
                            this.AFMQtyOptions[i] = o.AFMQtyOptions[i];
                        }
                    }
                }
                return TransactionItemClass;
            })();
            Controls.TransactionItemClass = TransactionItemClass;

            var ShoppingCartClass = (function () {
                function ShoppingCartClass(o) {
                    o = o || {};
                    this.CartId = o.CartId;
                    this.Name = o.Name;
                    if (o.Items) {
                        this.Items = [];
                        for (var i = 0; i < o.Items.length; i++) {
                            this.Items[i] = o.Items[i] ? new TransactionItemClass(o.Items[i]) : null;
                        }
                    }
                    this.LastModifiedDate = o.LastModifiedDate;
                    this.CartType = o.CartType;
                    if (o.PromotionLines) {
                        this.PromotionLines = [];
                        for (var i = 0; i < o.PromotionLines.length; i++) {
                            this.PromotionLines[i] = o.PromotionLines[i];
                        }
                    }
                    if (o.DiscountCodes) {
                        this.DiscountCodes = [];
                        for (var i = 0; i < o.DiscountCodes.length; i++) {
                            this.DiscountCodes[i] = o.DiscountCodes[i];
                        }
                    }
                    this.SelectedDeliveryOption = o.SelectedDeliveryOption;
                    this.LoyaltyCardId = o.LoyaltyCardId;
                    if (o.SelectedDeliveryOption) {
                        this.SelectedDeliveryOption = o.SelectedDeliveryOption;
                    } else {
                        this.SelectedDeliveryOption = new SelectedDeliveryOptionClass(null);
                    }

                    this.LoyaltyCardId = o.LoyaltyCardId;
                    this.SubtotalWithCurrency = o.SubtotalWithCurrency;
                    this.DiscountAmountWithCurrency = o.DiscountAmountWithCurrency;
                    this.ChargeAmountWithCurrency = o.ChargeAmountWithCurrency;
                    this.TaxAmountWithCurrency = o.TaxAmountWithCurrency;
                    this.TotalAmount = o.TotalAmount;
                    this.TotalAmountWithCurrency = o.TotalAmountWithCurrency;

                    this.EstShipping = o.EstShipping;
                    this.EstHomeDelivery = o.EstHomeDelivery;
                    this.AvalaraTaxError = o.AvalaraTaxError;
                    this.ATPError = o.ATPError;
                    this.CartCount = o.CartCount;
                    this.CustomerId = o.CustomerId;
                    this.SalesOrderNumber = o.SalesOrderNumber;

                    this.GrandTotal = o.GrandTotal;
                    this.ShippingAddress = o.ShippingAddress;
                    this.DeliveryModeId = o.DeliveryModeId;

                    if (o.TenderLines) {
                        this.TenderLines = [];
                        for (var i = 0; i < o.TenderLines.length; i++) {
                            this.TenderLines[i] = o.TenderLines[i];
                        }
                    }
                    this.EstShippingDiscount = o.EstShippingDiscount;
                    this.EstHomeDeliveryDiscount = o.EstHomeDeliveryDiscount;

                    this.RsaId = o.RsaId;
                }
                return ShoppingCartClass;
            })();
            Controls.ShoppingCartClass = ShoppingCartClass;

            var ShoppingCartResponseClass = (function () {
                function ShoppingCartResponseClass(o) {
                    o = o || {};
                    this.ShoppingCart = o.ShoppingCart;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return ShoppingCartResponseClass;
            })();
            Controls.ShoppingCartResponseClass = ShoppingCartResponseClass;

            var ShoppingCartCollectionResponseClass = (function () {
                function ShoppingCartCollectionResponseClass(o) {
                    o = o || {};
                    if (o.ShoppingCarts) {
                        this.ShoppingCarts = [];
                        for (var i = 0; i < o.ShoppingCarts.length; i++) {
                            this.ShoppingCarts[i] = o.ShoppingCarts[i] ? new ShoppingCartClass(o.ShoppingCarts[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return ShoppingCartCollectionResponseClass;
            })();
            Controls.ShoppingCartCollectionResponseClass = ShoppingCartCollectionResponseClass;

            var ShippingOptionClass = (function () {
                function ShippingOptionClass(o) {
                    o = o || {};
                    this.Id = o.Id;
                    this.ShippingType = o.ShippingType;
                    this.Description = o.Description;
                }
                return ShippingOptionClass;
            })();
            Controls.ShippingOptionClass = ShippingOptionClass;

            var ShippingOptionsClass = (function () {
                function ShippingOptionsClass(o) {
                    o = o || {};
                    if (o.ShippingOptions) {
                        this.ShippingOptions = [];
                        for (var i = 0; i < o.ShippingOptions.length; i++) {
                            this.ShippingOptions[i] = o.ShippingOptions[i] ? new ShippingOptionClass(o.ShippingOptions[i]) : null;
                        }
                    }
                }
                return ShippingOptionsClass;
            })();
            Controls.ShippingOptionsClass = ShippingOptionsClass;

            var ItemShippingOptionsClass = (function () {
                function ItemShippingOptionsClass(o) {
                    o = o || {};
                    this.LineId = o.LineId;
                    this.ShippingOptions = o.ShippingOptions;
                }
                return ItemShippingOptionsClass;
            })();
            Controls.ItemShippingOptionsClass = ItemShippingOptionsClass;

            var ShippingOptionResponseClass = (function () {
                function ShippingOptionResponseClass(o) {
                    o = o || {};
                    this.OrderShippingOptions = o.OrderShippingOptions;
                    if (o.ItemShippingOptions) {
                        this.ItemShippingOptions = [];
                        for (var i = 0; i < o.ItemShippingOptions.length; i++) {
                            this.ItemShippingOptions[i] = o.ItemShippingOptions[i] ? new ItemShippingOptionsClass(o.ItemShippingOptions[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return ShippingOptionResponseClass;
            })();
            Controls.ShippingOptionResponseClass = ShippingOptionResponseClass;

            var LineDeliveryPreferenceClass = (function () {
                function LineDeliveryPreferenceClass(o) {
                    o = o || {};
                    this.LineId = o.LineId;
                    this.DeliveryPreferenceTypes = o.DeliveryPreferenceTypes;
                }
                return LineDeliveryPreferenceClass;
            })();
            Controls.LineDeliveryPreferenceClass = LineDeliveryPreferenceClass;

            var CartDeliveryPreferencesClass = (function () {
                function CartDeliveryPreferencesClass(o) {
                    o = o || {};
                    this.HeaderDeliveryPreferenceTypes = o.HeaderDeliveryPreferenceTypes;
                    if (o.LineDeliveryPreferences) {
                        this.LineDeliveryPreferences = [];
                        for (var i = 0; i < o.LineDeliveryPreferences.length; i++) {
                            this.LineDeliveryPreferences[i] = o.LineDeliveryPreferences[i] ? new LineDeliveryPreferenceClass(o.LineDeliveryPreferences[i]) : null;
                        }
                    }
                }
                return CartDeliveryPreferencesClass;
            })();
            Controls.CartDeliveryPreferencesClass = CartDeliveryPreferencesClass;

            var DeliveryOptionClass = (function () {
                function DeliveryOptionClass(o) {
                    o = o || {};
                    this.Id = o.Id;
                    this.Description = o.Description;
                }
                return DeliveryOptionClass;
            })();
            Controls.DeliveryOptionClass = DeliveryOptionClass;

            var LineDeliveryOptionClass = (function () {
                function LineDeliveryOptionClass(o) {
                    o = o || {};
                    this.LineId = o.LineId;
                    if (o.DeliveryOptions) {
                        this.DeliveryOptions = [];
                        for (var i = 0; i < o.DeliveryOptions.length; i++) {
                            this.DeliveryOptions[i] = o.DeliveryOptions[i] ? new DeliveryOptionClass(o.DeliveryOptions[i]) : null;
                        }
                    }
                }
                return LineDeliveryOptionClass;
            })();
            Controls.LineDeliveryOptionClass = LineDeliveryOptionClass;

            var DeliveryOptionsResponseClass = (function () {
                function DeliveryOptionsResponseClass(o) {
                    o = o || {};
                    if (o.DeliveryOptions) {
                        this.DeliveryOptions = [];
                        for (var i = 0; i < o.DeliveryOptions.length; i++) {
                            this.DeliveryOptions[i] = o.DeliveryOptions[i] ? new DeliveryOptionClass(o.DeliveryOptions[i]) : null;
                        }
                    }
                    if (o.LineDeliveryOptions) {
                        this.LineDeliveryOptions = [];
                        for (var i = 0; i < o.LineDeliveryOptions.length; i++) {
                            this.LineDeliveryOptions[i] = o.LineDeliveryOptions[i] ? new LineDeliveryOptionClass(o.LineDeliveryOptions[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                    this.AddressVerficationResult = o.AddressVerficationResult;
                }
                return DeliveryOptionsResponseClass;
            })();
            Controls.DeliveryOptionsResponseClass = DeliveryOptionsResponseClass;

            var PaymentCardTypeClass = (function () {
                function PaymentCardTypeClass(o) {
                    o = o || {};
                    this.Id = o.Id;
                    this.CardType = o.CardType;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return PaymentCardTypeClass;
            })();
            Controls.PaymentCardTypeClass = PaymentCardTypeClass;

            var PaymentCardTypesResponseClass = (function () {
                function PaymentCardTypesResponseClass(o) {
                    o = o || {};
                    if (o.CardTypes) {
                        this.CardTypes = [];
                        for (var i = 0; i < o.CardTypes.length; i++) {
                            this.CardTypes[i] = o.CardTypes[i] ? new PaymentCardTypeClass(o.CardTypes[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return PaymentCardTypesResponseClass;
            })();
            Controls.PaymentCardTypesResponseClass = PaymentCardTypesResponseClass;

            var AddressClass = (function () {
                function AddressClass(o) {
                    o = o || {};
                    this.Country = o.Country;
                    this.State = o.State;
                    this.County = o.County;
                    this.City = o.City;
                    this.DistrictName = o.DisstrictName;
                    this.AttentionTo = o.AttentionTo;
                    this.Name = o.Name;

                    this.FirstName = o.FirstName;
                    this.LastName = o.LastName;

                    this.Street = o.Street;
                    this.Street2 = o.Street2;
                    this.StreetNumber = o.StreetNumber;
                    this.ZipCode = o.ZipCode;
                    this.Phone = o.Phone;
                    this.Email = o.Email;
                    this.RecordId = o.RecordId;
                    this.Deactivate = o.Deactivate;
                    this.IsPrimary = o.IsPrimary;
                    this.AddressType = o.AddressType;
                    this.AddressFriendlyName = o.AddressFriendlyName;
                    this.Email2 = o.Email2;
                    this.Phone2 = o.Phone2;
                    this.Phone3 = o.Phone3;
                    this.Phone1Extension = o.Phone1Extension;
                    this.Phone2Extension = o.Phone2Extension;
                    this.Phone3Extension = o.Phone3Extension;
                }
                return AddressClass;
            })();
            Controls.AddressClass = AddressClass;

            var AddressCollectionResponseClass = (function () {
                function AddressCollectionResponseClass(o) {
                    o = o || {};
                    if (o.Addresses) {
                        this.Addresses = [];
                        for (var i = 0; i < o.Addresses.length; i++) {
                            this.Addresses[i] = o.Addresses[i] ? new AddressClass(o.Addresses[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return AddressCollectionResponseClass;
            })();
            Controls.AddressCollectionResponseClass = AddressCollectionResponseClass;

            var PaymentClass = (function () {
                function PaymentClass(o) {
                    o = o || {};
                    this.PaymentAddress = o.PaymentAddress;
                    this.CardNumber = o.CardNumber;
                    this.CardType = o.CardType;
                    this.CCID = o.CCID;
                    this.ExpirationMonth = o.ExpirationMonth;
                    this.ExpirationYear = o.ExpirationYear;
                    this.NameOnCard = o.NameOnCard;
                    this.LoyaltyCardId = o.LoyaltyCardId;
                    this.DiscountCode = o.DiscountCode;
                    this.Last4Digits = o.Last4Digits;
                    this.SynchronyPromoDesc = o.SynchronyPromoDesc;
                    this.FinancingOptionId = o.FinancingOptionId;
                    this.MinimumPurchase = o.MinimumPurchase;
                    this.RemoveCartDiscount = o.RemoveCartDiscount;
                }
                return PaymentClass;
            })();
            Controls.PaymentClass = PaymentClass;

            var PaymentCardResponseClass = (function () {
                function PaymentCardResponseClass(o) {
                    o = o || {};
                    if (o.PaymentCards) {
                        this.PaymentCards = [];
                        for (var i = 0; i < o.PaymentCards.length; i++) {
                            this.PaymentCards[i] = o.PaymentCards[i] ? new PaymentClass(o.PaymentCards[i]) : null;
                        }
                    }
                }
                return PaymentCardResponseClass;
            })();
            Controls.PaymentCardResponseClass = PaymentCardResponseClass;

            var TokenizedPaymentCardClass = (function () {
                function TokenizedPaymentCardClass(o) {
                    o = o || {};
                    this.PaymentAddress = o.PaymentAddress;
                    this.CardType = o.CardType;
                    this.ExpirationMonth = o.ExpirationMonth;
                    this.ExpirationYear = o.ExpirationYear;
                    this.NameOnCard = o.NameOnCard;
                    this.CardToken = o.CardToken;
                    this.UniqueCardId = o.UniqueCardId;
                    this.MaskedCardNumber = o.MaskedCardNumber;
                    this.SynchronyPromoDesc = o.SynchronyPromoDesc;
                    this.FinancingOptionId = o.FinancingOptionId;
                    this.MinimumPurchase = o.MinimumPurchase;
                    this.RemoveCartDiscount = o.RemoveCartDiscount;
                }
                return TokenizedPaymentCardClass;
            })();
            Controls.TokenizedPaymentCardClass = TokenizedPaymentCardClass;

            var ErrorClass = (function () {
                function ErrorClass(o) {
                    o = o || {};
                    this.ErrorCode = o.ErrorCode;
                    this.ErrorMessage = o.ErrorMessage;
                }
                return ErrorClass;
            })();
            Controls.ErrorClass = ErrorClass;

            var CreateSalesOrderResponseClass = (function () {
                function CreateSalesOrderResponseClass(o) {
                    o = o || {};
                    this.OrderNumber = o.OrderNumber;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return CreateSalesOrderResponseClass;
            })();
            Controls.CreateSalesOrderResponseClass = CreateSalesOrderResponseClass;

            var StoreProductAvailabilityItemClass = (function () {
                function StoreProductAvailabilityItemClass(o) {
                    o = o || {};
                    this.RecordId = o.RecordId;
                    this.ItemId = o.ItemId;
                    this.VariantInventoryDimensionId = o.VariantInventoryDimensionId;
                    this.WarehouseInventoryDimensionId = o.WarehouseInventoryDimensionId;
                    this.InventoryLocationId = o.InventoryLocationId;
                    this.AvailableQuantity = o.AvailableQuantity;
                    this.ProductDetails = o.ProductDetails;
                }
                return StoreProductAvailabilityItemClass;
            })();
            Controls.StoreProductAvailabilityItemClass = StoreProductAvailabilityItemClass;

            var StoreProductAvailabilityClass = (function () {
                function StoreProductAvailabilityClass(o) {
                    o = o || {};
                    this.ChannelId = o.ChannelId;
                    this.Latitude = o.Latitude;
                    this.Longitude = o.Longitude;
                    this.Distance = o.Distance;
                    this.InventoryLocationId = o.InventoryLocationId;
                    this.StoreId = o.StoreId;
                    this.StoreName = o.StoreName;
                    this.PostalAddressId = o.PostalAddressId;
                    if (o.ProductAvailabilities) {
                        this.ProductAvailabilities = [];
                        for (var i = 0; i < o.ProductAvailabilities.length; i++) {
                            this.ProductAvailabilities[i] = o.ProductAvailabilities[i] ? new StoreProductAvailabilityItemClass(o.ProductAvailabilities[i]) : null;
                        }
                    }
                    this.SelectDisabled = o.SelectDisabled;
                    this.Country = o.Country;
                    this.State = o.State;
                    this.County = o.County;
                    this.City = o.City;
                    this.DistrictName = o.DisstrictName;
                    this.AttentionTo = o.AttentionTo;
                    this.Name = o.Name;
                    this.Street = o.Street;
                    this.StreetNumber = o.StreetNumber;
                    this.ZipCode = o.ZipCode;
                    this.Phone = o.Phone;
                    this.Email = o.EMail;
                    this.RecordId = o.RecordId;
                    this.Deactivate = o.Deactivate;
                    this.IsPrimary = o.IsPrimary;
                    this.AddressType = o.AddressType;
                    this.AddressFriendlyName = o.AddressFriendlyName;
                    this.AreItemsAvailableInStore = o.AreItemsAvailableInStore;
                }
                return StoreProductAvailabilityClass;
            })();
            Controls.StoreProductAvailabilityClass = StoreProductAvailabilityClass;

            var StoreLocationClass = (function () {
                function StoreLocationClass(o) {
                    o = o || {};
                    this.ChannelId = o.ChannelId;
                    this.Latitude = o.Latitude;
                    this.Longitude = o.Longitude;
                    this.Distance = o.Distance;
                    this.InventoryLocationId = o.InventoryLocationId;
                    this.StoreId = o.StoreId;
                    this.StoreName = o.StoreName;
                    this.PostalAddressId = o.PostalAddressId;
                    this.Country = o.Country;
                    this.State = o.State;
                    this.County = o.County;
                    this.City = o.City;
                    this.DistrictName = o.DisstrictName;
                    this.AttentionTo = o.AttentionTo;
                    this.Name = o.Name;
                    this.Street = o.Street;
                    this.StreetNumber = o.StreetNumber;
                    this.ZipCode = o.ZipCode;
                    this.Phone = o.Phone;
                    this.Email = o.EMail;
                    this.RecordId = o.RecordId;
                    this.Deactivate = o.Deactivate;
                    this.IsPrimary = o.IsPrimary;
                    this.AddressType = o.AddressType;
                    this.AddressFriendlyName = o.AddressFriendlyName;
                }
                return StoreLocationClass;
            })();
            Controls.StoreLocationClass = StoreLocationClass;

            var CountryInfoClass = (function () {
                function CountryInfoClass(o) {
                    o = o || {};
                    this.CountryCode = o.CountryCode;
                    this.CountryName = o.CountryName;
                }
                return CountryInfoClass;
            })();
            Controls.CountryInfoClass = CountryInfoClass;

            var TenderDataLineClass = (function () {
                function TenderDataLineClass(o) {
                    o = o || {};
                    this.Amount = o.Amount;
                    this.GiftCardId = o.GiftCardId;
                    this.LoyaltyCardId = o.LoyaltyCardId;
                    this.PaymentCard = o.PaymentCard;
                    this.TokenizedPaymentCard = o.TokenizedPaymentCard;
                }
                return TenderDataLineClass;
            })();
            Controls.TenderDataLineClass = TenderDataLineClass;

            var DeliveryPreferenceResponseClass = (function () {
                function DeliveryPreferenceResponseClass(o) {
                    o = o || {};
                    this.CartDeliveryPreferences = o.CartDeliveryPreferences ? new CartDeliveryPreferencesClass(o.CartDeliveryPreferences) : null;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return DeliveryPreferenceResponseClass;
            })();
            Controls.DeliveryPreferenceResponseClass = DeliveryPreferenceResponseClass;

            var StoreProductAvailabilityResponseClass = (function () {
                function StoreProductAvailabilityResponseClass(o) {
                    o = o || {};
                    if (o.Stores) {
                        this.Stores = [];
                        for (var i = 0; i < o.Stores.length; i++) {
                            this.Stores[i] = o.Stores[i] ? new StoreProductAvailabilityClass(o.Stores[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return StoreProductAvailabilityResponseClass;
            })();
            Controls.StoreProductAvailabilityResponseClass = StoreProductAvailabilityResponseClass;

            var StoreLocationResponseClass = (function () {
                function StoreLocationResponseClass(o) {
                    o = o || {};
                    if (o.Stores) {
                        this.Stores = [];
                        for (var i = 0; i < o.Stores.length; i++) {
                            this.Stores[i] = o.Stores[i] ? new StoreLocationClass(o.Stores[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return StoreLocationResponseClass;
            })();
            Controls.StoreLocationResponseClass = StoreLocationResponseClass;

            var CountryInfoResponseClass = (function () {
                function CountryInfoResponseClass(o) {
                    o = o || {};
                    if (o.Countries) {
                        this.Countries = [];
                        for (var i = 0; i < o.Countries.length; i++) {
                            this.Countries[i] = o.Countries[i] ? new CountryInfoClass(o.Countries[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return CountryInfoResponseClass;
            })();
            Controls.CountryInfoResponseClass = CountryInfoResponseClass;

            var BooleanResponseClass = (function () {
                function BooleanResponseClass(o) {
                    o = o || {};
                    this.IsTrue = o.IsTrue;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return BooleanResponseClass;
            })();
            Controls.BooleanResponseClass = BooleanResponseClass;

            var StringResponseClass = (function () {
                function StringResponseClass(o) {
                    o = o || {};
                    this.Value = o.Value;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return StringResponseClass;
            })();
            Controls.StringResponseClass = StringResponseClass;

            var TenderTypesResponseClass = (function () {
                function TenderTypesResponseClass(o) {
                    o = o || {};
                    this.HasCreditCardPayment = o.HasCreditCardPayment;
                    this.HasGiftCardPayment = o.HasGiftCardPayment;
                    this.HasLoyaltyCardPayment = o.HasLoyaltyCardPayment;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return TenderTypesResponseClass;
            })();
            Controls.TenderTypesResponseClass = TenderTypesResponseClass;

            var GiftCardInformationClass = (function () {
                function GiftCardInformationClass(o) {
                    o = o || {};
                    this.GiftCardId = o.GiftCardId;
                    this.Balance = o.Balance;
                    this.CurrencyCode = o.CurrencyCode;
                    this.IsInfoAvailable = o.IsInfoAvailable;
                }
                return GiftCardInformationClass;
            })();
            Controls.GiftCardInformationClass = GiftCardInformationClass;

            var GiftCardResponseClass = (function () {
                function GiftCardResponseClass(o) {
                    o = o || {};
                    this.GiftCardInformation = o.GiftCardInformation;
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return GiftCardResponseClass;
            })();
            Controls.GiftCardResponseClass = GiftCardResponseClass;

            var LoyaltyCardClass = (function () {
                function LoyaltyCardClass(o) {
                    o = o || {};
                    this.CardNumber = o.CardNumber;
                    this.CardTenderType = o.CardTenderType;
                }
                return LoyaltyCardClass;
            })();
            Controls.LoyaltyCardClass = LoyaltyCardClass;

            var LoyaltyCardsResponseClass = (function () {
                function LoyaltyCardsResponseClass(o) {
                    o = o || {};
                    this.LoyaltyCards = [];
                    for (var i = 0; i < o.LoyaltyCards.length; i++) {
                        this.LoyaltyCards[i] = o.LoyaltyCards[i] ? new LoyaltyCardClass(o.LoyaltyCards[i]) : null;
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return LoyaltyCardsResponseClass;
            })();
            Controls.LoyaltyCardsResponseClass = LoyaltyCardsResponseClass;

            var StateProvinceInfoClass = (function () {
                function StateProvinceInfoClass(o) {
                    o = o || {};
                    this.CountryRegionId = o.CountryRegionId;
                    this.StateId = o.StateId;
                    this.StateName = o.StateName;
                }
                return StateProvinceInfoClass;
            })();
            Controls.StateProvinceInfoClass = StateProvinceInfoClass;

            var StateProvinceInfoResponseClass = (function () {
                function StateProvinceInfoResponseClass(o) {
                    o = o || {};
                    if (o.Countries) {
                        this.StateProvinces = [];
                        for (var i = 0; i < o.StateProvinces.length; i++) {
                            this.StateProvinces[i] = o.StateProvinces[i] ? new StateProvinceInfoClass(o.StateProvinces[i]) : null;
                        }
                    }
                    if (o.Errors) {
                        this.Errors = [];
                        for (var i = 0; i < o.Errors.length; i++) {
                            this.Errors[i] = o.Errors[i] ? new ErrorClass(o.Errors[i]) : null;
                        }
                    }
                }
                return StateProvinceInfoResponseClass;
            })();
            Controls.StateProvinceInfoResponseClass = StateProvinceInfoResponseClass;

            var AFMOrderConfirmationResponseClass = (function () {
                function AFMOrderConfirmationResponseClass(o) {
                    o = o || {};
                    this.ShoppingCart = o.ShoppingCart;
                    this.ShippingAddress = o.ShippingAddress;
                    this.BillingAddress = o.BillingAddress;
                }
                return AFMOrderConfirmationResponseClass;
            })();
            Controls.AFMOrderConfirmationResponseClass = AFMOrderConfirmationResponseClass;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";

            Controls.ResourceStrings = {};
            Controls.ExternalResourceStrings = {};
            Controls.Resources = {};

            var ResourcesHandler = (function () {
                function ResourcesHandler() {
                }
                ResourcesHandler.selectUICulture = function () {
                    var uiCultureFromCookie;
                    Controls.AFMExtendedService.GetCultureId().done(function (data) {
                        uiCultureFromCookie = data;

                        if (Controls.ResourceStrings[uiCultureFromCookie]) {
                            Controls.Resources = Controls.ResourceStrings[uiCultureFromCookie];
                        } else {
                            Controls.Resources = Controls.ResourceStrings["en-us"];
                        }
                        $(document).trigger('GetResources', uiCultureFromCookie);
                    }).fail(function (data) {
                        Controls.Resources = Controls.ResourceStrings["en-us"];
                        $(document).trigger('GetResources', "en-us");
                    });
                };
                ResourcesHandler.uiCultureKey = "cuid";
                return ResourcesHandler;
            })();
            Controls.ResourcesHandler = ResourcesHandler;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";

            Controls.CartData;
            Controls.errorMessage = '';
            Controls.errorPanel = $(document).find(".msax-ErrorPanel");
            Controls.CardToken = ko.observable(null);
            ;
            Controls.TenderLinesData = [];
            Controls.AFMOrderSummaryData = new Controls.AFMOrderSummary(null);
            Controls.PaymentCardData;
            Controls.IsConfirmedit = false;
            Controls.AFMZipCodeData = ko.observable(null);
            Controls.ErrorCount = 0;
            Controls.SynchronyMinPurchaseAmount = ko.observable(0);

            var CartBase = (function () {
                function CartBase() {
                }
                CartBase.CreateCartData = function () {
                    CartBase._loadingDialog = CartBase._cartView.find('.msax-Loading');
                    Controls.LoadingOverlay.CreateLoadingDialog(CartBase._loadingDialog, 300, 100);
                    CartBase.HideAllControls();
                    CartBase.LoadBaseData();
                    if (window.location.hash.split('#').length > 1) {
                        if (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.Shipping) {
                            Controls.AFMExtendedService.CommenceCheckout(Controls.ShoppingCartDataLevel.All).done(function (data) {
                                Controls.CartData(data.ShoppingCart);
                                CartBase.GetUserPageMode();
                            });
                            msaxValues.msax_LocalPageMode = Controls.PageMode.Shipping;
                        } else if (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.Billing) {
                            msaxValues.msax_LocalPageMode = Controls.PageMode.Billing;
                            CartBase.GetUserPageMode();
                        } else if (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.Payment) {
                            msaxValues.msax_LocalPageMode = Controls.PageMode.Payment;
                            CartBase.GetUserPageMode();
                        } else if (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.Confirm) {
                            msaxValues.msax_LocalPageMode = Controls.PageMode.Confirm;
                            CartBase.GetUserPageMode();
                        } else if (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.cartview) {
                            msaxValues.msax_LocalPageMode = Controls.PageMode.cartview;
                            CartBase.GetUserPageMode();
                        } else if (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.thankyou) {
                            msaxValues.msax_LocalPageMode = Controls.PageMode.thankyou;
                            CartBase.GetUserPageMode();
                        } else {
                            location.hash = "shipping";
                            CartBase.CreateCartData();
                        }
                    } else {
                        CartBase.GetUserPageMode();
                    }
                };

                CartBase.GetUserPageMode = function () {
                    Controls.AFMExtendedService.GetUserPageMode().done(function (data) {
                        msaxValues.msax_PageMode = data.PageMode;
                        if (msaxValues.msax_LocalPageMode != Controls.PageMode.Shipping) {
                            AFM.Ecommerce.Controls.CartBase.LoadInitialData();
                        } else
                            AFM.Ecommerce.Controls.CartBase.DataModelLoad();
                    }).fail(function (error) {
                        msaxValues.msax_PageMode = Controls.PageModeOptions.CartView;
                        AFM.Ecommerce.Controls.CartBase.LoadInitialData();
                        AFM.Ecommerce.Controls.CartBase.DataModelLoad();
                    });
                };

                CartBase.LoadBaseData = function () {
                    if (AFM.Utils.isNullOrUndefined(Controls.CartData)) {
                        var cart = new Controls.ShoppingCartClass(null);
                        cart.SelectedDeliveryOption = new Controls.SelectedDeliveryOptionClass(null);
                        cart.SelectedDeliveryOption.CustomAddress = new Controls.AddressClass(null);
                        cart.Items = [];
                        cart.DiscountCodes = [];
                        cart.ShippingAddress = new Controls.AddressClass(null);
                        Controls.CartData = ko.observable(cart);
                    }
                };

                CartBase.LoadInitialData = function () {
                    var _this = this;
                    var CheckoutDisable = $(document).find('.msax-CheckoutButton');
                    if (AFM.Utils.isNullOrEmpty(msaxValues.msax_PageMode) || msaxValues.msax_PageMode == Controls.PageModeOptions.CartView) {
                        Controls.ShoppingCartService.GetShoppingCart(Controls.ShoppingCartDataLevel.All, false).done(function (data) {
                            Controls.CartData(data.ShoppingCart);
                            AFM.Ecommerce.Controls.CartBase.DataModelLoad();
                            if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                                Controls.errorMessage = data.Errors[0].ErrorMessage;
                                _this.showError(true);
                                CheckoutDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                                CheckoutDisable.addClass("disableButton");
                                Controls.ErrorCount = data.Errors.length;
                            } else {
                                _this.showError(false);
                                CheckoutDisable.removeAttr('disabled').css('mouse', 'cursor');
                                CheckoutDisable.removeClass("disableButton");
                            }
                        });
                    } else if (msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou) {
                        Controls.AFMExtendedService.GetOrderConfirmationDetails().done(function (data) {
                            AFM.Ecommerce.Controls.CartBase.DataModelLoad();
                        }).fail(function (error) {
                            Controls.errorMessage = Controls.Resources.String_1151;
                            CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(CartBase._loadingDialog);
                        });
                    } else {
                        Controls.ShoppingCartService.GetShoppingCart(Controls.ShoppingCartDataLevel.All, true).done(function (data) {
                            Controls.CartData(data.ShoppingCart);
                            AFM.Ecommerce.Controls.CartBase.DataModelLoad();
                            if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                                Controls.errorMessage = data.Errors[0].ErrorMessage;
                                Controls.ErrorCount = data.Errors.length;

                                if (!AFM.Utils.isNullOrUndefined(data.ShoppingCart.ATPError) && (msaxValues.msax_PageMode == Controls.PageModeOptions.BillingView || msaxValues.msax_PageMode == Controls.PageModeOptions.BillingViewcompleted))
                                    $(document).find('.msax - ErrorPanel').hide();
                                else
                                    _this.showError(true);

                                $(document).find('.msax-SubmitOrder').hide();
                            } else {
                                $(document).find('.msax-SubmitOrder').show();
                                _this.showError(false);
                            }
                        }).fail(function (error) {
                            if (!AFM.Utils.isNullOrEmpty(msaxValues.msax_ErrorPageUrl))
                                window.location.href = msaxValues.msax_ErrorPageUrl;
                        });
                    }
                };
                CartBase.DataModelLoad = function () {
                    $('.msax-Control').each(function (index, element) {
                        var viewModelName = $(element.firstElementChild).attr("data-model");
                        var viewModel = eval(viewModelName);
                        if (viewModelName != undefined)
                            ko.applyBindings(new viewModel(element.firstElementChild), element);
                    });
                    CartBase.ClearPageMode();
                    CartBase.UpdateFocusPageModeValue(msaxValues.msax_PageMode);
                };

                CartBase.HideAllControls = function () {
                    $(document).find('.msax-ShoppingCart').hide();
                    $(document).find('.msax-OrderSummary').hide();
                    $(document).find('.msax-ProceedtoCartButtons').hide();
                    $(document).find('.msax-SubmitOrderButtons').hide();
                    $(document).find('.msax-ShippingAddressCollection').hide();
                    $(document).find('.msax-ShippingAddress').hide();
                    $(document).find('.msax-BillingAddress').hide();
                    $(document).find('.msax-EditAddress').hide();
                    $(document).find('.msax-PromotionCode').hide();

                    $(document).find('.msax-RsaId').hide();

                    Controls.LoadingOverlay.ShowLoadingDialog(CartBase._loadingDialog, CartBase._loadingText, Controls.Resources.String_179);
                };
                CartBase.UpdateCartData = function (cartData) {
                    Controls.CartData(cartData);
                };

                CartBase.ClearPageMode = function () {
                    $(document).trigger('ClearPageMode');
                };

                CartBase.UpdateFocusPageModeValue = function (pageMode) {
                    CartBase.HideAllControls();
                    var pageModeValue = CartBase.FindPageMode(pageMode);
                    msaxValues.msax_PageMode = pageMode;
                    location.hash = msaxValues.msax_LocalPageMode.toString();
                    if (pageMode != Controls.PageModeOptions.ThankYou && pageMode != Controls.PageModeOptions.ConfirmView)
                        CartBase.CreateDDO("");
                    $(document).trigger('PageModeSubscribers');
                    $(document).trigger(pageModeValue);
                };

                CartBase.OnClearPageMode = function (callerContext, handler) {
                    $(document).on('ClearPageMode', $.proxy(handler, callerContext));
                };
                CartBase.OnPageModeSubscribers = function (callerContext, handler) {
                    $(document).on('PageModeSubscribers', $.proxy(handler, callerContext));
                };

                CartBase.OnUpdateFocusPageMode = function (pageMode, callerContext, handler) {
                    var pageModeValue = CartBase.FindPageMode(pageMode);

                    $(document).on(pageModeValue, $.proxy(handler, callerContext));
                };

                CartBase.showError = function (isError) {
                    var errorPanel = CartBase._cartView.find(".msax-ErrorPanel");

                    if (isError) {
                        errorPanel.empty();
                        errorPanel.append($('<span/>').text(Controls.errorMessage));
                        errorPanel.removeClass("msax-Info");
                        errorPanel.addClass("msax-Error");
                        $(window).scrollTop(0);
                        errorPanel.show();
                    } else if (errorPanel.hasClass("msax-Error")) {
                        errorPanel.removeClass("msax-Error");
                        errorPanel.removeClass("msax-Info");
                        errorPanel.hide();
                    }
                };

                CartBase.showInfo = function (isInfo) {
                    var errorPanel = CartBase._cartView.find(".msax-ErrorPanel");

                    if (isInfo) {
                        errorPanel.empty();
                        errorPanel.append($('<span/>').text(Controls.errorMessage));
                        errorPanel.removeClass("msax-Error");
                        errorPanel.addClass("msax-Info");
                        $(window).scrollTop(0);
                        errorPanel.show();
                    } else if (errorPanel.hasClass("msax-Info")) {
                        errorPanel.removeClass("msax-Error");
                        errorPanel.removeClass("msax-Info");
                        errorPanel.hide();
                    }
                };

                CartBase.FindPageMode = function (pageMode) {
                    var pageModeValue;
                    switch (pageMode) {
                        case Controls.PageModeOptions.CartView:
                            pageModeValue = "CartViewPageMode";
                            msaxValues.msax_LocalPageMode = "CartViewPageMode";
                            break;
                        case Controls.PageModeOptions.ShippingView:
                            pageModeValue = "ShippingViewPageMode";
                            msaxValues.msax_LocalPageMode = "shipping";
                            break;
                        case Controls.PageModeOptions.ShippingViewCompleted:
                            pageModeValue = "ShippingViewCompletedPageMode";
                            msaxValues.msax_LocalPageMode = "shipping";
                            break;
                        case Controls.PageModeOptions.BillingView:
                            pageModeValue = "BillingViewPageMode";
                            msaxValues.msax_LocalPageMode = "billing";
                            break;
                        case Controls.PageModeOptions.BillingViewcompleted:
                            pageModeValue = "BillingViewCompletedPageMode";
                            msaxValues.msax_LocalPageMode = "billing";
                            break;
                        case Controls.PageModeOptions.PaymentView:
                            pageModeValue = "PaymentViewPageMode";
                            break;
                        case Controls.PageModeOptions.PaymentViewCompleted:
                            pageModeValue = "PaymentViewCompletedPageMode";
                            break;
                        case Controls.PageModeOptions.ConfirmView:
                            pageModeValue = "ConfirmViewPageMode";
                            msaxValues.msax_LocalPageMode = "confirm";
                            break;
                        case Controls.PageModeOptions.ConfirmViewCompleted:
                            pageModeValue = "ConfirmViewCompletedPageMode";
                            msaxValues.msax_LocalPageMode = "confirm";
                            break;
                        case Controls.PageModeOptions.ThankYou:
                            pageModeValue = "ThankYouPageMode";
                            msaxValues.msax_LocalPageMode = "thankyou";
                            break;
                        default:
                            pageModeValue = "CartViewPageMode";
                            msaxValues.msax_LocalPageMode = "CartViewPageMode";
                            break;
                    }
                    return pageModeValue;
                };

                CartBase.CreateDDO = function (orderNumber) {
                    if (!AFM.Utils.isNullOrUndefined(Controls.CartData()) && !AFM.Utils.isNullOrUndefined(Controls.CartData().Items)) {
                        var data = false;
                        if (msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou && !AFM.Utils.isNullOrEmpty(orderNumber))
                            data = true;
                        var DDO = {};
                        var DDO_checkoutInfo = [];
                        var DDO_checkoutPages;
                        var pageData = {
                            pageName: $(document).find("title").text(),
                            pageURL: $(location).attr('href'),
                            pageDepartment: CartBase.FindPageMode(msaxValues.msax_PageMode),
                            pageSiteSection: msaxValues.msax_LocalPageMode,
                            pageError: Controls.errorMessage
                        };

                        var siteData = {
                            sitePlatform: findBrowser(),
                            siteDomain: get_hostname($(location).attr('href'))
                        };

                        var userData = {
                            userStatus: msaxValues.msax_LoginMode == true ? "Signed In" : "Not Signed In"
                        };

                        var DDO_product_info = [];
                        for (var itemVal in Controls.CartData().Items) {
                            var itemData = Controls.CartData().Items[itemVal];
                            DDO_checkoutInfo.push({
                                checkoutProductName: itemData["ProductDetailsExpanded"].Name,
                                checkoutProductPrice: itemData.NetAmountWithCurrency.replace(",", ""),
                                checkoutProductID: itemData.ItemId
                            });
                            if (data) {
                                DDO_product_info.push({
                                    product_sku: itemData.ItemId,
                                    product_name: itemData["ProductDetailsExpanded"].Name,
                                    product_qty: itemData.Quantity,
                                    product_price: itemData.NetAmountWithCurrency.replace("$", "")
                                });
                            }
                        }

                        DDO_checkoutPages = {
                            checkoutState: msaxValues.msax_LoginMode == true ? "SignedInCustomer" : "Guest",
                            checkoutInfo: DDO_checkoutInfo
                        };
                        if (data) {
                            var DDO_orderDetail = {
                                orderID: orderNumber,
                                tax: Controls.CartData().TaxAmountWithCurrency.replace("$", ""),
                                shipping: Controls.CartData().EstShipping.replace("$", ""),
                                discount: Controls.CartData().DiscountAmountWithCurrency.replace("$", ""),
                                promoCode: Controls.CartData().DiscountCodes,
                                totalRevenue: Controls.CartData().TotalAmountWithCurrency.replace("$", ""),
                                product_info: DDO_product_info,
                                rsaId: Controls.CartData().RsaId
                            };
                        }
                        if (data) {
                            DDO = {
                                pageData: pageData,
                                siteData: siteData,
                                userData: userData,
                                checkoutPages: DDO_checkoutPages,
                                orderDetail: DDO_orderDetail
                            };
                            $(document).trigger('UpdateDDO_orderDetail', DDO);
                        } else {
                            DDO = {
                                pageData: pageData,
                                siteData: siteData,
                                userData: userData,
                                checkoutPages: DDO_checkoutPages
                            };
                            $(document).trigger('UpdateDDO_checkoutPages', DDO);
                        }
                    }
                };
                CartBase._cartView = $(document);
                return CartBase;
            })();
            Controls.CartBase = CartBase;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";

            var CookieManager = (function () {
                function CookieManager() {
                }
                CookieManager.getCookie = function (cookieName) {
                    var nameWithEqSign = cookieName + "=";
                    var allCookies = document.cookie.split(';');
                    for (var i = 0; i < allCookies.length; i++) {
                        var singleCookie = allCookies[i];
                        while (singleCookie.charAt(0) == ' ') {
                            singleCookie = singleCookie.substring(1, singleCookie.length);
                        }
                        if (singleCookie.indexOf(nameWithEqSign) == 0) {
                            return singleCookie.substring(nameWithEqSign.length, singleCookie.length);
                        }
                    }
                    return null;
                };

                CookieManager.setSessionCookie = function (cname, cvalue) {
                    document.cookie = cname + "=" + cvalue + "; ";
                };

                CookieManager.setCookie = function (cname, cvalue, exdays) {
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires=" + d.toUTCString();
                    document.cookie = cname + "=" + cvalue + "; " + expires;
                };
                CookieManager.afmZipCode = "AFMZipCode";
                CookieManager.shoppingcartId = "sct";
                return CookieManager;
            })();
            Controls.CookieManager = CookieManager;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
$(function () {
    AFM.Ecommerce.Controls.ResourcesHandler.selectUICulture();
});

$(document).on('CreateCartData', function (event, data) {
    AFM.Ecommerce.Controls.CartBase.CreateCartData();
});

function findBrowser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null)
            return 'Opera ' + tem[1];
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M.join(' ');
}

function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
}

var msaxError = {
    show: function (level, message, errorCodes) {
        console.error(message);
    }
};

var msaxValues;
(function (msaxValues) {
    msaxValues.msax_CurrencyTemplate;
    msaxValues.msax_CheckoutServiceUrl;
    msaxValues.msax_ShoppingCartServiceUrl;
    msaxValues.msax_OrderConfirmationUrl;
    msaxValues.msax_IsDemoMode;
    msaxValues.msax_DemoDataPath;
    msaxValues.msax_StoreProductAvailabilityServiceUrl;
    msaxValues.msax_ChannelServiceUrl;
    msaxValues.msax_LoyaltyServiceUrl;
    msaxValues.msax_CustomerServiceUrl;
    msaxValues.msax_HasInventoryCheck;
    msaxValues.msax_CheckoutUrl;
    msaxValues.msax_IsCheckoutCart;
    msaxValues.msax_ContinueShoppingUrl;
    msaxValues.msax_CartDiscountCodes;
    msaxValues.msax_CartLoyaltyReward;
    msaxValues.msax_ShoppingCartUrl;
    msaxValues.msax_CartDisplayPromotionBanner;
    msaxValues.msax_ReviewDisplayPromotionBanner;

    msaxValues.msax_AFMExtendedServiceUrl;
    msaxValues.msax_CurrentPageMode;
    msaxValues.msax_TransactionId;
    msaxValues.msax_ViewTax;
    msaxValues.msax_ViewDiscount;
    msaxValues.msax_ShoppingCartReadMode;
    msaxValues.msax_IsEditable = [];
    msaxValues.msax_PageMode;
    msaxValues.msax_LocalPageMode;

    msaxValues.msax_LoginMode;
    msaxValues.msax_SigInUrl;
    msaxValues.msax_GoBackUrl;
    msaxValues.msax_ErrorPageUrl;

    msaxValues.msax_SurveyTermsAndConditions;
    msaxValues.msax_IsAcceptTermsAndConditions;

    msaxValues.msax_MinimumPurchaseSynchronyCart;
    msaxValues.msax_Synchronycart;
})(msaxValues || (msaxValues = {}));

var AFM;
(function (AFM) {
    (function (Maps) {
        Maps.Map;
        Maps.loadModule;
        Maps.Search;
        Maps.Events;
        Maps.Pushpin;
        Maps.Infobox;
        Maps.Point;
    })(AFM.Maps || (AFM.Maps = {}));
    var Maps = AFM.Maps;
})(AFM || (AFM = {}));

var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var AjaxProxy = (function () {
                function AjaxProxy(relativeUrl) {
                    this.SubmitRequest = function (webMethod, data, successCallback, errorCallback) {
                        var webServiceUrl = this.relativeUrl + webMethod;

                        var requestDigestHeader = ($(document).find('#__REQUESTDIGEST'))[0];
                        var retailRequestDigestHeader = ($(document).find('#__RETAILREQUESTDIGEST'))[0];
                        var requestDigestHeaderValue;
                        var retailRequestDigestHeaderValue;

                        if (AFM.Utils.isNullOrUndefined(requestDigestHeader) || AFM.Utils.isNullOrUndefined(retailRequestDigestHeader)) {
                            requestDigestHeaderValue = null;
                            retailRequestDigestHeaderValue = null;
                        } else {
                            requestDigestHeaderValue = requestDigestHeader.value;
                            retailRequestDigestHeaderValue = retailRequestDigestHeader.value;
                        }

                        $.ajax({
                            url: webServiceUrl,
                            data: JSON.stringify(data),
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                                if (data.RedirectUrl) {
                                    window.location = data.RedirectUrl;
                                } else {
                                    successCallback(data);
                                }
                            },
                            error: function (error) {
                                errorCallback(error);
                            },
                            headers: {
                                "X-RequestDigest": requestDigestHeaderValue,
                                "X-RetailRequestDigest": retailRequestDigestHeaderValue
                            }
                        });
                    };
                    this.relativeUrl = relativeUrl;
                    $(document).ajaxError(this.ajaxErrorHandler);
                }
                AjaxProxy.prototype.ajaxErrorHandler = function (e, xhr, settings) {
                    var errorMessage = 'Url:\n' + settings.url + '\n\n' + 'Response code:\n' + xhr.status + '\n\n' + 'Status Text:\n' + xhr.statusText + '\n\n' + 'Response Text: \n' + xhr.responseText;

                    msaxError.show('error', 'The web service call was unsuccessful.  Details: ' + errorMessage);
                };
                return AjaxProxy;
            })();
            Controls.AjaxProxy = AjaxProxy;

            var LoadingOverlay = (function () {
                function LoadingOverlay() {
                }
                LoadingOverlay.CreateLoadingDialog = function (loadingDialog, width, height) {
                    LoadingOverlay.spinner = new Spinner(LoadingOverlay.opts);
                    LoadingOverlay.spinner.spin(document.getElementsByClassName('msax-Loading')[0]);
                };

                LoadingOverlay.ShowLoadingDialog = function (loadingDialog, loadingText, text) {
                    $(loadingDialog).show();
                };

                LoadingOverlay.CloseLoadingDialog = function (loadingDialog) {
                    $(loadingDialog).hide();
                };

                LoadingOverlay.CreateRemoveItemDialog = function (loadingDialog, callerContext, handler, callerContextCancel, handlerCancel, RemoveButtonText, CancelButtonText) {
                    loadingDialog.dialog({
                        autoOpen: false,
                        height: 200,
                        width: 500,
                        modal: true,
                        buttons: {
                            "Remove from Cart": $.proxy(handler, callerContext),
                            "Cancel": $.proxy(handlerCancel, callerContextCancel)
                        },
                        close: function () {
                            loadingDialog.dialog("close");
                        }
                    });

                    $('.ui-dialog').addClass('msax-Control');
                };

                LoadingOverlay.openAddressDialog = function (loadingDialog, handler, handlerCancel, callerContext, htmlContent, UseAddressButtonText, CancelButtonText) {
                    loadingDialog.removeClass('msax-DisplayNone');
                    $('.msax-AddressReplaceConfrimText').html(htmlContent);
                    loadingDialog.dialog({
                        autoOpen: true,
                        height: "auto",
                        width: 600,
                        modal: true,
                        buttons: [
                            {
                                text: UseAddressButtonText,
                                click: $.proxy(handler, callerContext)
                            },
                            {
                                text: CancelButtonText,
                                click: $.proxy(handlerCancel, callerContext)
                            }],
                        close: function () {
                            loadingDialog.dialog("close");
                        }
                    });
                    $('.ui-dialog').addClass('msax-Control');
                };

                LoadingOverlay.openRemoveItemDialog = function (loadingDialog, dialogText, text) {
                    dialogText.text(text);
                    loadingDialog.dialog("open");
                };

                LoadingOverlay.closeRemoveItemDialog = function (loadingDialog) {
                    loadingDialog.dialog("close");
                };

                LoadingOverlay.openAddressItemDialog = function (loadingDialog) {
                    loadingDialog.dialog("open");
                };
                LoadingOverlay.opts = {
                    lines: 12,
                    length: 20,
                    width: 10,
                    radius: 20,
                    speed: 0.8,
                    color: '#042a5f',
                    hwaccel: true,
                    shadow: false,
                    className: '.spinner',
                    delay: 1000,
                    backdrop: 'white',
                    backdropOpacity: 0.8,
                    position: 'fixed',
                    stopOnAjaxError: true,
                    stopOnReveal: true
                };
                return LoadingOverlay;
            })();
            Controls.LoadingOverlay = LoadingOverlay;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.isNullOrUndefined = function (o) {
            return (o === undefined || o === null);
        };

        Utils.isNullOrEmpty = function (o) {
            return (Utils.isNullOrUndefined(o) || o === '');
        };

        Utils.isNullOrWhiteSpace = function (o) {
            return (Utils.isNullOrEmpty(o) || (typeof o === 'string' && o.replace(/\s/g, '').length < 1));
        };

        Utils.hasElements = function (o) {
            return !Utils.isNullOrUndefined(o) && o.length > 0;
        };

        Utils.getValueOrDefault = function (o, defaultValue) {
            return Utils.isNullOrWhiteSpace(o) ? defaultValue : o;
        };

        Utils.hasErrors = function (o) {
            return (!Utils.isNullOrUndefined(o) && !this.hasElements(o.Errors));
        };

        Utils.format = function (object) {
            var params = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                params[_i] = arguments[_i + 1];
            }
            if (Utils.isNullOrWhiteSpace(object)) {
                return object;
            }

            if (params == null) {
                throw AFM.Ecommerce.Controls.Resources.String_70;
            }

            for (var index = 0; index < params.length; index++) {
                if (params[index] == null) {
                    throw AFM.Ecommerce.Controls.Resources.String_70;
                }

                var regexp = new RegExp('\\{' + index + '\\}', 'gi');
                object = object.replace(regexp, params[index]);
            }

            return object;
        };

        Utils.CurrencyString = function (doubleValue, usa) {
            var dec = String(doubleValue).split(/[.,]/), sep = usa ? ',' : '.', decsep = usa ? '.' : ',';
            var currency = usa ? '$' : '';
            var seperateddata = currency + Utils.xsep(dec[0], sep) + (dec[1] ? decsep + dec[1] : '');
            if (seperateddata.split('.').length <= 1)
                seperateddata = seperateddata + ".00";
            else if (seperateddata.split('.').length == 2) {
                var decimalData = seperateddata.substring(seperateddata.lastIndexOf('.') + 1, seperateddata.length);
                if (!Utils.isNullOrEmpty(decimalData) && decimalData.length == 1)
                    seperateddata = seperateddata + "0";
            }
            return seperateddata;
        };

        Utils.xsep = function (num, sep) {
            var n = String(num).split(''), i = -3;
            while (n.length + i > 0) {
                n.splice(i, 0, sep);
                i -= 4;
            }
            return n.join('');
        };

        Utils.indexOf = function (needle, property) {
            if (typeof Array.prototype.indexOf === 'function') {
                Utils.indexOf = Array.prototype.indexOf;
            } else {
                Utils.indexOf = function (needle) {
                    var i = -1, index = -1;

                    for (i = 0; i < this.length; i++) {
                        if (this[i][property] === needle) {
                            index = i;
                            break;
                        }
                    }

                    return index;
                };
            }

            return Utils.indexOf.call(this, needle, property);
        };

        Utils.Trim = function (x) {
            if (x != null)
                return x.replace(/^\s+|\s+$/gm, '');
            else
                return x;
        };

        Utils.SetPhoneFormat = function (x) {
            if (x != null) {
                if (x.length >= 10) {
                    x = x.replace(/[\s\(\)-]+/g, '');
                    x = '(' + x.substr(0, 3) + ') ' + x.substr(3, 3) + '-' + x.substr(6, x.length - 1);
                }
                return x;
            } else
                return x;
        };

        Utils.RemovePhoneFormat = function (x) {
            if (x != null) {
                if (x.length >= 10) {
                    x = x.replace(/[\s\(\)-]+/g, '');
                }
                return x;
            } else
                return x;
        };
        return Utils;
    })();
    AFM.Utils = Utils;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            

            var AsyncResult = (function () {
                function AsyncResult() {
                    this._callerContext = this;
                    this._succeded = false;
                    this._failed = false;
                    this._successCallbacks = [];
                    this._errorCallbacks = [];
                }
                AsyncResult.prototype.resolve = function (result) {
                    this._succeded = true;
                    this._result = result;

                    FunctionQueueHelper.callFunctions(this._successCallbacks, this._callerContext, this._result);
                };

                AsyncResult.prototype.reject = function (errors) {
                    this._failed = true;
                    this._errors = errors;

                    FunctionQueueHelper.callFunctions(this._errorCallbacks, this._callerContext, this._errors);
                };

                AsyncResult.prototype.done = function (callback) {
                    if (this._succeded && callback) {
                        callback.call(this._callerContext, this._result);
                    } else {
                        FunctionQueueHelper.queueFunction(this._successCallbacks, callback);
                    }

                    return this;
                };

                AsyncResult.prototype.fail = function (callback) {
                    if (this._failed && callback) {
                        callback.call(this._callerContext, this._errors);
                    } else {
                        FunctionQueueHelper.queueFunction(this._errorCallbacks, callback);
                    }

                    return this;
                };
                return AsyncResult;
            })();
            Controls.AsyncResult = AsyncResult;

            var FunctionQueueHelper = (function () {
                function FunctionQueueHelper() {
                }
                FunctionQueueHelper.callFunctions = function (functionQueue, callerContext, data) {
                    if (!AFM.Utils.hasElements(functionQueue)) {
                        return;
                    }

                    for (var i = 0; i < functionQueue.length; i++) {
                        functionQueue[i].call(callerContext, data);
                    }

                    functionQueue = [];
                };

                FunctionQueueHelper.queueFunction = function (functionQueue, callback) {
                    if (!AFM.Utils.isNullOrUndefined(callback)) {
                        functionQueue.push(callback);
                    }
                };
                return FunctionQueueHelper;
            })();
            Controls.FunctionQueueHelper = FunctionQueueHelper;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var ChannelService = (function () {
                function ChannelService() {
                }
                ChannelService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_ChannelServiceUrl + '/');
                };

                ChannelService.GetChannelConfiguration = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetChannelConfiguration", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ChannelService.GetTenderTypes = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetChannelTenderTypes", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ChannelService.GetCountryRegionInfo = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetChannelCountryRegionInfo", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ChannelService.GetStateProvinceInfo = function (countryCode) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        'countryCode': countryCode
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetStateProvinceInfo", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };
                return ChannelService;
            })();
            Controls.ChannelService = ChannelService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var CustomerService = (function () {
                function CustomerService() {
                }
                CustomerService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_CustomerServiceUrl + '/');
                };

                CustomerService.GetAddresses = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetAddresses", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };
                return CustomerService;
            })();
            Controls.CustomerService = CustomerService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var LoyaltyService = (function () {
                function LoyaltyService() {
                }
                LoyaltyService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_LoyaltyServiceUrl + '/');
                };

                LoyaltyService.GetLoyaltyCards = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetLoyaltyCards", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                LoyaltyService.GetAllLoyaltyCardsStatus = function () {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetAllLoyaltyCardsStatus", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });
                };

                LoyaltyService.GetLoyaltyCardStatus = function (loyaltyCardNumber) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "loyaltyCardNumber": loyaltyCardNumber
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetLoyaltyCardStatus", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });
                };

                LoyaltyService.UpdateLoyaltyCardId = function (isCheckoutSession, loyaltyCardId, shoppingCartDataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "loyaltyCardId": loyaltyCardId,
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("UpdateLoyaltyCardId", data, function (data) {
                        Controls.ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };
                return LoyaltyService;
            })();
            Controls.LoyaltyService = LoyaltyService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var StoreProductAvailabilityService = (function () {
                function StoreProductAvailabilityService() {
                }
                StoreProductAvailabilityService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_StoreProductAvailabilityServiceUrl + '/');
                };

                StoreProductAvailabilityService.GetNearbyStoresWithAvailability = function (latitude, longitude, items) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "latitude": latitude,
                        "longitude": longitude,
                        "items": items
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetNearbyStoresWithAvailability", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                StoreProductAvailabilityService.GetNearbyStores = function (latitude, longitude) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "latitude": latitude,
                        "longitude": longitude
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetNearbyStores", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };
                return StoreProductAvailabilityService;
            })();
            Controls.StoreProductAvailabilityService = StoreProductAvailabilityService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var ButtonControls = (function () {
                function ButtonControls(element) {
                    this.cart = Controls.CartData;
                    this.tenderLines = Controls.TenderLinesData;
                    this.paymentCard = Controls.PaymentCardData;
                    this.pageElement = $(element);
                    this.ProceedtoCartButtons = $(document).find('.msax-ProceedtoCartButtons');
                    this.SubmitOrderButtons = $(document).find('.msax-SubmitOrderButtons');
                    this.SubmitOrderDisable = $(document).find('.msax-SubmitOrder');
                    this.CheckoutDisable = $(document).find('.msax-CheckoutButton');
                    this.PreviousButton = $(document).find('.msax-Previous');

                    this.headerValues = ko.observable(null);
                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(Controls.CartData()) && AFM.Utils.hasElements(Controls.CartData().Items);
                    });

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.UpdateShoppingCart);
                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.UpdateCheckoutCart);

                    Controls.CartBase.OnClearPageMode(this, this.ClearPageMode);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;

                    this.orderReviewPageMode = msaxValues.msax_PageMode == Controls.PageModeOptions.ConfirmView || msaxValues.msax_PageMode == Controls.PageModeOptions.ConfirmViewCompleted ? true : false;
                }
                ButtonControls.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.CartView, this, this.CartViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmView, this, this.ConfirmViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmViewCompleted, this, this.ConfirmViewCompletedPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                ButtonControls.prototype.UpdateShoppingCart = function (event, data) {
                    this.UpdateShoppingCartData(data);
                };

                ButtonControls.prototype.UpdateCheckoutCart = function (event, data) {
                    this.UpdateShoppingCartData(data);
                };

                ButtonControls.prototype.UpdateShoppingCartData = function (data) {
                    this.cart(data.ShoppingCart);
                    if (msaxValues.msax_PageMode == Controls.PageModeOptions.CartView) {
                        this.ProceedtoCartButtons.show();
                        this.CheckoutDisable.css('display', 'inline');
                    }

                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        Controls.CartBase.showError(true);
                        this.SubmitOrderDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                        this.SubmitOrderDisable.addClass("disableButton");
                        this.CheckoutDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                        this.CheckoutDisable.addClass("disableButton");
                    } else if (Controls.CartData() != null && !AFM.Utils.isNullOrEmpty(Controls.CartData().AvalaraTaxError)) {
                        Controls.errorMessage = Controls.Resources.String_1161;
                        Controls.CartBase.showError(true);
                        this.SubmitOrderDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                        this.SubmitOrderDisable.addClass("disableButton");
                        this.CheckoutDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                        this.CheckoutDisable.addClass("disableButton");
                    } else {
                        this.cart(data.ShoppingCart);
                        Controls.CartBase.showError(false);
                        this.SubmitOrderDisable.removeAttr('disabled').css('mouse', 'cursor');
                        this.SubmitOrderDisable.removeClass("disableButton");
                        this.CheckoutDisable.removeAttr('disabled').css('mouse', 'cursor');
                        this.CheckoutDisable.removeClass("disableButton");
                    }
                };

                ButtonControls.prototype.ClearPageMode = function (event, data) {
                    this.SubmitOrderButtons.hide();
                    this.ProceedtoCartButtons.hide();
                };

                ButtonControls.prototype.CartViewPageMode = function (event, data) {
                    this.SubmitOrderButtons.hide();
                    this.CheckoutDisable.css('display', 'inline');
                    this.ProceedtoCartButtons.show();
                };

                ButtonControls.prototype.ConfirmViewPageMode = function (event, data) {
                    this.ProceedtoCartButtons.hide();
                    this.SubmitOrderButtons.hide();
                };

                ButtonControls.prototype.ConfirmViewCompletedPageMode = function (event, data) {
                    if (!AFM.Utils.isNullOrEmpty(msaxValues.msax_TransactionId))
                        this.ProceedtoCartButtons.hide();

                    if (Controls.CartData() != null && !AFM.Utils.isNullOrEmpty(Controls.CartData().AvalaraTaxError)) {
                        Controls.errorMessage = Controls.Resources.String_1161;
                        Controls.CartBase.showError(true);
                        this.DisableSubmitOrder();
                    } else if (Controls.CartData() != null && !AFM.Utils.isNullOrEmpty(Controls.CartData().ATPError)) {
                        Controls.errorMessage = Controls.CartData().ATPError;
                        Controls.CartBase.showError(true);
                        this.DisableSubmitOrder();
                    } else {
                        this.SubmitOrderButtons.show();
                    }
                };

                ButtonControls.prototype.shoppingCartNextClick = function (viewModel, event) {
                    this.CheckoutDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.CheckoutDisable.addClass("disableButton");
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_176);
                    if (!AFM.Utils.isNullOrWhiteSpace(msaxValues.msax_CheckoutUrl)) {
                        var userpagemode = new Controls.UserPageMode(null);
                        userpagemode.PageMode = Controls.PageModeOptions.ShippingViewCompleted;
                        msaxValues.msax_LocalPageMode = Controls.PageMode.Shipping;
                        Controls.AFMExtendedService.SetUserPageMode(userpagemode).done(function (data) {
                            window.location.href = msaxValues.msax_CheckoutUrl;
                        });
                    } else {
                        this.CheckoutDisable.removeAttr('disabled').css('mouse', 'cursor');
                        this.CheckoutDisable.removeClass("disableButton");
                    }
                };

                ButtonControls.prototype.continueShoppingClick = function (viewModel, event) {
                    if (!AFM.Utils.isNullOrWhiteSpace(msaxValues.msax_ContinueShoppingUrl)) {
                        window.location.href = msaxValues.msax_ContinueShoppingUrl;
                    } else {
                    }
                };

                ButtonControls.prototype.commenceCheckout = function () {
                    Controls.AFMExtendedService.CommenceCheckout(Controls.ShoppingCartDataLevel.All).done(function (data) {
                        Controls.CartBase.showError(false);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        if (!AFM.Utils.isNullOrWhiteSpace(msaxValues.msax_CheckoutUrl)) {
                        }
                    }).fail(function (errors) {
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                ButtonControls.prototype.reviewPreviousClick = function () {
                    Controls.IsConfirmedit = true;
                    $(document).trigger('ShowPasswordAndTACInputs', "");
                    $(document).trigger('ShowNavigatingAwayPopUp', null);
                    if (Controls.navigateAway) {
                        msaxValues.msax_LocalPageMode = Controls.PageMode.Billing;
                        var userpagemode = new Controls.UserPageMode(null);
                        userpagemode.PageMode = Controls.PageModeOptions.BillingView;
                        Controls.AFMExtendedService.SetUserPageMode(userpagemode).done(function (data) {
                            Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.PaymentView);
                        });
                    }
                };

                ButtonControls.prototype.submitOrder = function () {
                    var _this = this;
                    this.SubmitOrderButtons.hide();
                    this.SubmitOrderDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.SubmitOrderDisable.addClass("disableButton");
                    this.PreviousButton.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.PreviousButton.addClass("disableButton");

                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_1123);

                    if (!AFM.Utils.isNullOrUndefined(msaxValues.msax_SurveyTermsAndConditions))
                        this.headerValues(msaxValues.msax_SurveyTermsAndConditions);
                    else {
                        this.headerValues = ko.observable(null);
                        msaxValues.msax_SurveyTermsAndConditions = {
                            'OkToTextUniqueId': '1', 'OkToTextVersionId': '1', 'IsAcceptTermsAndConditions': msaxValues.msax_IsAcceptTermsAndConditions, 'TermsAndConditionsUniqueId': '1', 'TermsAndConditionsVersionId': '1',
                            'IsOptinDealsUniqueId': '1',
                            'IsOptinDealsVersionId': '1'
                        };
                        this.headerValues(msaxValues.msax_SurveyTermsAndConditions);
                    }

                    msaxValues.msax_IsAcceptTermsAndConditions = true;

                    if (!AFM.Utils.isNullOrUndefined(msaxValues.msax_IsAcceptTermsAndConditions) && msaxValues.msax_IsAcceptTermsAndConditions) {
                        Controls.CartBase.showError(false);
                        Controls.AFMExtendedService.SubmitOrder(Controls.TenderLinesData, this.headerValues(), Controls.PaymentCardData().PaymentAddress.Email, Controls.CardToken()).done(function (data) {
                            var orderNumber = data.OrderNumber;
                            if (data.Errors.length == 0) {
                                _this.orderNumber = data.OrderNumber;

                                if (AFM.Utils.isNullOrWhiteSpace(msaxValues.msax_OrderConfirmationUrl)) {
                                } else {
                                    Controls.AFMExtendedService.ClearAllCookies().done(function (data) {
                                        window.location.href = msaxValues.msax_OrderConfirmationUrl += '?confirmationId=' + orderNumber;
                                    });
                                }
                            } else {
                                _this.EnableSubmitOrder();
                                if (data.Errors[0].ErrorCode == "PaymentError")
                                    Controls.errorMessage = data.Errors[0].ErrorMessage;
                                else
                                    Controls.errorMessage = Controls.Resources.String_69;
                                Controls.CartBase.showError(true);
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            }
                        }).fail(function (errors) {
                            _this.EnableSubmitOrder();
                            Controls.errorMessage = Controls.Resources.String_69;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    } else {
                        this.EnableSubmitOrder();
                        Controls.errorMessage = Controls.Resources.String_1149;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }
                };

                ButtonControls.prototype.EnableSubmitOrder = function () {
                    this.SubmitOrderDisable.removeAttr('disabled').css('mouse', 'cursor');
                    this.SubmitOrderDisable.removeClass("disableButton");
                    this.PreviousButton.removeAttr('disabled').css('mouse', 'cursor');
                    this.PreviousButton.removeClass("disableButton");
                    this.SubmitOrderButtons.show();
                };

                ButtonControls.prototype.DisableSubmitOrder = function () {
                    this.SubmitOrderDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.SubmitOrderDisable.addClass("disableButton");
                    this.CheckoutDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.CheckoutDisable.addClass("disableButton");
                    this.SubmitOrderButtons.show();
                };
                return ButtonControls;
            })();
            Controls.ButtonControls = ButtonControls;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var CartMode = (function () {
                function CartMode(element) {
                    this.ShippingBtn = $(element).find(".msax-ShippingBtn");
                    this.BillingBtn = $(element).find(".msax-BillingBtn");
                    this.PaymentBtn = $(element).find(".msax-PaymentBtn");
                    this.ConfirmBtn = $(element).find(".msax-ConfirmBtn");

                    this.pageHeader = ko.observable("");

                    this.isShippingModePaased = false;
                    this.isBillinggModePaased = false;
                    this.isPaymentModePaased = false;
                    this.isConfirmModePaased = false;
                    $(element).find(".msax_BackButton").css({ cursor: 'pointer' });

                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.updateShoppingCart);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;
                }
                CartMode.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingView, this, this.ShippingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingViewCompleted, this, this.ShippingViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.BillingView, this, this.BillingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.BillingViewcompleted, this, this.BillingViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.PaymentView, this, this.PaymentViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.PaymentViewCompleted, this, this.PaymentViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmView, this, this.ConfirmViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmViewCompleted, this, this.ConfirmViewCompletedPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                CartMode.prototype.CallGoBackButton = function () {
                    if (msaxValues.msax_LocalPageMode == Controls.PageMode.Shipping) {
                        if (!AFM.Utils.isNullOrEmpty(msaxValues.msax_GoBackUrl))
                            window.location.href = msaxValues.msax_GoBackUrl;
                    } else if (msaxValues.msax_LocalPageMode == Controls.PageMode.Billing)
                        Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ShippingViewCompleted);
                    else if (msaxValues.msax_LocalPageMode == Controls.PageMode.Payment)
                        Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.BillingViewcompleted);
                    else if (msaxValues.msax_LocalPageMode == Controls.PageMode.Confirm) {
                        Controls.IsConfirmedit = true;
                        $(document).trigger('ShowPasswordAndTACInputs', "");
                        $(document).trigger('ShowNavigatingAwayPopUp', null);
                        if (Controls.navigateAway) {
                            msaxValues.msax_LocalPageMode = Controls.PageMode.Billing;
                            var userpagemode = new Controls.UserPageMode(null);
                            userpagemode.PageMode = Controls.PageModeOptions.BillingView;
                            Controls.AFMExtendedService.SetUserPageMode(userpagemode).done(function (data) {
                                Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.PaymentView);
                            });
                        }
                    }
                };

                CartMode.prototype.updateShoppingCart = function (event, data) {
                };

                CartMode.prototype.ShippingViewPageMode = function (event, data) {
                    this.pageHeader(Controls.Resources.String_1098);
                    this.BillingBtn.removeClass("active");
                    this.PaymentBtn.removeClass("active");
                    this.ConfirmBtn.removeClass("active");
                    this.ShippingBtn.addClass("active");

                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.ShippingView;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode);
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Shipping;

                    $(document).find('#TermsAncConditionBlock').hide();
                    this.ShippingBtnActive();
                };

                CartMode.prototype.ShippingViewCompletedPageMode = function (event, data) {
                    this.pageHeader(Controls.Resources.String_1098);
                    this.BillingBtn.removeClass("active");
                    this.PaymentBtn.removeClass("active");
                    this.ConfirmBtn.removeClass("active");
                    this.ShippingBtn.addClass("active");

                    this.isShippingModePaased = true;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.ShippingViewCompleted;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode);
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Shipping;

                    $(document).find('#TermsAncConditionBlock').hide();
                    this.ShippingBtnActive();
                };

                CartMode.prototype.BillingViewPageMode = function (event, data) {
                    this.pageHeader(Controls.Resources.String_1139);
                    this.ShippingBtn.removeClass("active");
                    this.PaymentBtn.removeClass("active");
                    this.ConfirmBtn.removeClass("active");
                    this.BillingBtn.addClass("active");

                    msaxValues.msax_LocalPageMode = Controls.PageMode.Billing;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.BillingView;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode);

                    $(document).find('#TermsAncConditionBlock').hide();
                    this.BillingBtnActive();
                };

                CartMode.prototype.BillingViewCompletedPageMode = function (event, data) {
                    this.pageHeader(Controls.Resources.String_1139);
                    this.ShippingBtn.removeClass("active");
                    this.PaymentBtn.removeClass("active");
                    this.ConfirmBtn.removeClass("active");
                    this.BillingBtn.addClass("active");

                    this.isBillinggModePaased = true;
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Billing;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.BillingViewcompleted;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode);

                    $(document).find('#TermsAncConditionBlock').hide();
                    this.BillingBtnActive();
                };

                CartMode.prototype.PaymentViewPageMode = function (event, data) {
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Payment;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.PaymentView;

                    Controls.AFMExtendedService.RedirectToPayment().done(function (data) {
                        window.location.href = data;
                    });
                    ;
                };

                CartMode.prototype.PaymentViewCompletedPageMode = function (event, data) {
                    this.isBillinggModePaased = true;
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Payment;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.PaymentViewCompleted;

                    Controls.AFMExtendedService.RedirectToPayment().done(function (data) {
                        window.location.href = data;
                    });
                    ;
                };

                CartMode.prototype.ConfirmViewPageMode = function (event, data) {
                    this.pageHeader(Controls.Resources.String_1140);
                    this.ShippingBtn.removeClass("active");
                    this.ConfirmBtn.removeClass("active");
                    this.BillingBtn.removeClass("active");
                    this.ShippingBtn.addClass("completed");
                    this.BillingBtn.addClass("completed");
                    this.PaymentBtn.addClass("completed");
                    this.ConfirmBtn.addClass("active");

                    this.isConfirmModePaased = true;
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Confirm;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.ConfirmView;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode);

                    $(document).find('#TermsAncConditionBlock').show();
                    this.ConfirmBtnActive();
                };

                CartMode.prototype.ConfirmViewCompletedPageMode = function (event, data) {
                    this.pageHeader(Controls.Resources.String_1140);
                    this.ShippingBtn.removeClass("active");
                    this.ConfirmBtn.removeClass("active");
                    this.BillingBtn.removeClass("active");
                    this.ShippingBtn.addClass("completed");
                    this.BillingBtn.addClass("completed");
                    this.PaymentBtn.addClass("completed");
                    this.ConfirmBtn.addClass("active");

                    msaxValues.msax_LocalPageMode = Controls.PageMode.Confirm;
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.ConfirmViewCompleted;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode);

                    $(document).find('#TermsAncConditionBlock').show();
                    this.ConfirmBtnActive();
                };

                CartMode.prototype.ShippingBtnActive = function () {
                    this.ShippingBtn.removeAttr('disabled');
                    this.BillingBtn.attr('disabled', 'disabled');
                    this.PaymentBtn.attr('disabled', 'disabled');
                    this.ConfirmBtn.attr('disabled', 'disabled');

                    if (Controls.IsConfirmedit) {
                        this.ShippingBtn.css('cursor', 'pointer');
                        this.BillingBtn.css('cursor', 'pointer');
                        this.PaymentBtn.css('cursor', 'pointer');
                        this.ConfirmBtn.css('cursor', 'pointer');
                    } else {
                        this.ShippingBtn.css('cursor', 'default');
                        this.BillingBtn.css('cursor', 'default');
                        this.PaymentBtn.css('cursor', 'default');
                    }
                };

                CartMode.prototype.BillingBtnActive = function () {
                    this.BillingBtn.removeAttr('disabled');
                    this.PaymentBtn.attr('disabled', 'disabled');
                    this.ConfirmBtn.attr('disabled', 'disabled');
                    this.ShippingBtn.addClass("completed");

                    if (Controls.IsConfirmedit) {
                        this.ShippingBtn.css('cursor', 'pointer');
                        this.BillingBtn.css('cursor', 'pointer');
                        this.PaymentBtn.css('cursor', 'pointer');
                        this.ConfirmBtn.css('cursor', 'pointer');
                    } else {
                        this.ShippingBtn.css('cursor', 'default');
                        this.BillingBtn.css('cursor', 'default');
                        this.PaymentBtn.css('cursor', 'default');
                    }
                };

                CartMode.prototype.ConfirmBtnActive = function () {
                    this.ShippingBtn.css('cursor', 'pointer');
                    this.BillingBtn.css('cursor', 'pointer');
                    this.PaymentBtn.css('cursor', 'pointer');
                    this.ConfirmBtn.css({ cursor: 'default' });

                    this.ShippingBtn.removeAttr('disabled');
                    this.BillingBtn.removeAttr('disabled');
                    this.ConfirmBtn.removeAttr('disabled');
                };

                CartMode.prototype.ShippingButton = function () {
                    if (this.isConfirmModePaased) {
                        Controls.IsConfirmedit = true;
                        Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ShippingViewCompleted);
                    }
                };
                CartMode.prototype.BillingButton = function () {
                    if (this.isConfirmModePaased) {
                        Controls.IsConfirmedit = true;
                        Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.BillingViewcompleted);
                    }
                };
                CartMode.prototype.PaymentButton = function () {
                    if (this.isConfirmModePaased)
                        Controls.AFMExtendedService.RedirectToPayment().done(function (data) {
                            window.location.href = data;
                        });
                    ;
                };
                CartMode.prototype.ConfirmButton = function () {
                    if (this.isConfirmModePaased && Controls.IsConfirmedit)
                        Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ConfirmViewCompleted);
                };
                return CartMode;
            })();
            Controls.CartMode = CartMode;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var CreateAddress = (function () {
                function CreateAddress(element) {
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText);

                    this.shippingAddressCollectionView = $(document).find('.msax-ShippingAddressCollection');
                    this.shippingAddressView = $(document).find('.msax-ShippingAddress');
                    this.paymentAddressView = $(document).find('.msax-BillingAddress');
                    this.CartMode = $(document).find("msax-CartMode");
                    this.AFMZipCode = ko.observable('');
                    if (!AFM.Utils.isNullOrEmpty(Controls.AFMZipCodeData()))
                        this.AFMZipCode(Controls.AFMZipCodeData());

                    this.selectedAddress = ko.observable(null);
                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(Controls.CartData()) && AFM.Utils.hasElements(Controls.CartData().Items);
                    });

                    this.ShippingconfirmEmailValue = ko.observable('');
                    this.BillingconfirmEmailValue = ko.observable('');
                    this.availableDeliveryMethods = ko.observableArray(null);

                    this.orderShippingOptions = ko.observable(new Controls.SelectedDeliveryOptionClass(null));
                    this.isBillingAddressSameAsShippingAddress = ko.observable(false);

                    this.isOptinDeals = ko.observable(true);

                    this.isOptinDealsVisiable = ko.observable(false);

                    this.IsEditAllowed = true;
                    this.userCartInfo = new Controls.UserCartData(null);
                    this.ShippingAddress = new Controls.AddressClass(null);
                    this.PaymentAddress = new Controls.AddressClass(null);

                    this.AvailableAddressCollection = ko.observable(new Controls.AddressCollectionResponseClass(null));
                    this.shippingAddressCollectionView.show();

                    this._CountryInfoClassList = ko.observableArray([{ CountryCode: 'USA', CountryName: Controls.Resources.String_21 }]);

                    this._StateInfoClassList = ko.observableArray(null);
                    this.IsCartInfoLoaded = false;

                    this.isOktoText = ko.observable(false);
                    this.InitateTempAddressDetails();
                    this.LoadAddressState();

                    this.addressConfirmDialog = $(element).find(".msax-AddressReplaceConfrimPopup");
                    this.isShippingFromDialog = true;
                    this.suggestedAddressText = ko.observable(null);

                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.updateShoppingCart);
                    Controls.CartBase.OnClearPageMode(this, this.ClearPageMode);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;
                }
                CreateAddress.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingView, this, this.ShippingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingViewCompleted, this, this.ShippingViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.BillingView, this, this.BillingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.BillingViewcompleted, this, this.BillingViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmView, this, this.ConfirmViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmViewCompleted, this, this.ConfirmViewCompletedPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                CreateAddress.prototype.preventKeyPress = function (data, event) {
                    if (event.keyCode == 8 && !AFM.Utils.isNullOrUndefined(event.target.tagName) && event.target.tagName.toLowerCase() == "select") {
                        event.preventDefault();
                        return false;
                    }
                    return true;
                };

                CreateAddress.prototype.ReplacerSuggestedAddress = function () {
                    if (this.isShippingFromDialog) {
                        this.tempStreet(this.avaSuggestedAddress.Street);
                        this.tempStreet2(this.avaSuggestedAddress.Street2);
                        this.tempCity(this.avaSuggestedAddress.City);
                        this.tempState(this.avaSuggestedAddress.State);
                        this.tempZipCode(this.avaSuggestedAddress.ZipCode);
                        this.tempCountry(this.avaSuggestedAddress.Country);
                        Controls.LoadingOverlay.closeRemoveItemDialog(this.addressConfirmDialog);
                        this.getDeliveryMethods();
                    } else {
                        this.tempBillingCity(this.avaSuggestedAddress.City);
                        this.tempBillingStreet(this.avaSuggestedAddress.Street);
                        this.tempBillingStreet2(this.avaSuggestedAddress.Street2);
                        this.tempBillingState(this.avaSuggestedAddress.State);
                        this.tempBillingZipcode(this.avaSuggestedAddress.ZipCode);
                        this.tempBillingCountry(this.avaSuggestedAddress.Country);
                        Controls.LoadingOverlay.closeRemoveItemDialog(this.addressConfirmDialog);
                        this.SetUserCartDataInfowithRedirect(this.userCartInfo);
                    }
                    this.avaSuggestedAddress = null;
                };

                CreateAddress.prototype.CancelSuggested = function () {
                    Controls.LoadingOverlay.closeRemoveItemDialog(this.addressConfirmDialog);
                };

                CreateAddress.prototype.updateShoppingCart = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    } else {
                        Controls.CartBase.showError(false);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }
                };

                CreateAddress.prototype.LoadAddressState = function () {
                    var _this = this;
                    this.IsCartInfoLoaded = false;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText);
                    Controls.AFMExtendedService.GetAFMAddressState('USA').done(function (data) {
                        _this._StateInfoClassList(data);
                        var tempStateListValue = new Controls.StateProvinceInfoClass(null);
                        tempStateListValue.CountryRegionId = 'USA';
                        tempStateListValue.StateId = '';
                        tempStateListValue.StateName = '--Select State--';
                        _this._StateInfoClassList.unshift(tempStateListValue);

                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (errors) {
                        Controls.errorMessage = "Error occured while getting addresslist";
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.ClearPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.shippingAddressCollectionView.hide();
                    this.shippingAddressView.hide();
                    this.paymentAddressView.hide();
                };

                CreateAddress.prototype.HideAddressFieldErrors = function () {
                    $(document).find('.msax-OrderPhoneNumber1Error').hide();
                    $(document).find('.msax-OrderPhoneNumber2Error').hide();
                    $(document).find('.msax-OrderPhoneNumber3Error').hide();
                    $(document).find('.msax-ShippingEmailError').hide();
                    $(document).find('.msax-ShippingConfirmEmailError').hide();
                    $(document).find('.msax-ShippingConfirmEmailError1').hide();
                    $(document).find('.msax-ShippingEmail2Error').hide();
                    $(document).find('.msax-OrderAddressFirstNameError').hide();
                    $(document).find('.msax-OrderAddressLastNameError').hide();
                    $(document).find('.msax-OrderAddressStreet1Error').hide();
                    $(document).find('.msax-OrderAddressCityError').hide();
                    $(document).find('.msax-OrderAddressStateError').hide();
                    $(document).find('.msax-OrderAddressLastNameError').hide();
                    $(document).find('.msax-OrderAddressZipCodeError').hide();

                    $(document).find('.msax-ConfirmBillingEmailTextBoxError').hide();
                    $(document).find('.msax-ConfirmBillingEmailTextBoxError1').hide();
                    $(document).find('.msax-EmailTextBoxError').hide();
                    $(document).find('.msax-PaymentAddressFirstNameError').hide();
                    $(document).find('.msax-PaymentAddressLastNameError').hide();
                    $(document).find('.msax-PaymentAddressCityError').hide();
                    $(document).find('.msax-PaymentAddressStateError').hide();
                    $(document).find('.msax-PaymentAddressStreet1Error').hide();
                    $(document).find('.msax-PaymentAddressZipCodeError').hide();
                    $(document).find('.msax-PaymentPhoneNumber1Error').hide();
                };

                CreateAddress.prototype.ShippingViewPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.HideAddressFieldErrors();
                    if (!AFM.Utils.isNullOrEmpty(Controls.CartData()) && !AFM.Utils.isNullOrEmpty(Controls.CartData().CustomerId)) {
                        this.GetAddressCollection(true);
                        this.shippingAddressCollectionView.show();
                        $('.msax-ShippingAddressCollection').css('display', 'inline');
                    }
                    this.getZipCodeInfo();
                    this.shippingAddressView.show();
                    this.paymentAddressView.hide();

                    this.getUserCartInfo();
                    $(document).find('.msax-ShoppingCart').hide();
                    $(document).find('.msax-EditAddress').hide();
                    $(document).find('.msax-ButtonControls').hide();
                };

                CreateAddress.prototype.ShippingViewCompletedPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.HideAddressFieldErrors();
                    if (!AFM.Utils.isNullOrEmpty(Controls.CartData()) && !AFM.Utils.isNullOrEmpty(Controls.CartData().CustomerId))
                        $('.msax-ShippingAddressCollection').css('display', 'inline');
                    if (AFM.Utils.isNullOrUndefined(this.AvailableAddressCollection()) || (AFM.Utils.isNullOrUndefined(this.AvailableAddressCollection().Addresses) || this.AvailableAddressCollection().Addresses.length == 0)) {
                        this.GetAddressCollection(true);
                        this.shippingAddressCollectionView.show();
                    }
                    this.getZipCodeInfo();
                    this.shippingAddressView.show();
                    this.paymentAddressView.hide();
                    if (!AFM.Utils.isNullOrUndefined(this.ShippingAddress.ZipCode)) {
                        this.getUserCartInfo();
                    } else {
                        this.getUserCartInfo();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }

                    $(document).find('.msax-ShoppingCart').hide();
                    $(document).find('.msax-EditAddress').hide();
                    $(document).find('.msax-ButtonControls').hide();
                };

                CreateAddress.prototype.BillingViewPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.HideAddressFieldErrors();
                    this.hideZipCodeMasterError();
                    if (!AFM.Utils.isNullOrEmpty(Controls.CartData()) && !AFM.Utils.isNullOrEmpty(Controls.CartData().CustomerId))
                        this.GetAddressCollection(false);
                    this.shippingAddressCollectionView.hide();
                    this.shippingAddressView.hide();
                    this.paymentAddressView.show();

                    this.IsEditAllowed = true;
                    this.getUserCartInfo();
                    $(document).find('.msax-ShoppingCart').hide();
                    $(document).find('.msax-EditAddress').hide();
                    $(document).find('.msax-ButtonControls').hide();
                };

                CreateAddress.prototype.BillingViewCompletedPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.HideAddressFieldErrors();
                    this.hideZipCodeMasterError();

                    this.shippingAddressCollectionView.hide();
                    this.shippingAddressView.hide();
                    this.paymentAddressView.show();
                    this.IsEditAllowed = true;
                    if (!AFM.Utils.isNullOrUndefined(this.ShippingAddress.ZipCode)) {
                        this.getUserCartInfo();
                    } else {
                        this.getUserCartInfo();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }

                    $(document).find('.msax-ShoppingCart').hide();
                    $(document).find('.msax-EditAddress').hide();
                    $(document).find('.msax-ButtonControls').hide();
                };

                CreateAddress.prototype.ConfirmViewPageMode = function (event, data) {
                    this.shippingAddressCollectionView.hide();
                    this.shippingAddressView.hide();
                    this.paymentAddressView.hide();
                    $(document).find('.msax-ButtonControls').show();
                };

                CreateAddress.prototype.ConfirmViewCompletedPageMode = function (event, data) {
                    this.shippingAddressCollectionView.hide();
                    this.shippingAddressView.hide();
                    this.paymentAddressView.hide();
                    $(document).find('.msax-ButtonControls').show();
                };

                CreateAddress.prototype.UpdateShippingAddressfromAvailableAddresses = function (data) {
                    this.selectedAddress(data);
                    var divPosition = $('.msax-ButtonSection').offset();
                    $("html, body").animate({ scrollTop: divPosition.top }, "slow");
                };
                CreateAddress.prototype.GetAddressCollection = function (IsShipping) {
                    var _this = this;
                    Controls.AFMExtendedService.GetShippingAddresses(IsShipping).done(function (data) {
                        if (IsShipping)
                            _this.AvailableAddressCollection(data);
                        else if (data != null && data.Addresses != null && data.Addresses.length > 0) {
                            var billingAddress = data.Addresses[0];
                            _this.tempBillingFirstName(billingAddress.FirstName);
                            _this.tempBillingLastName(billingAddress.LastName);
                            _this.tempBillingCountry(billingAddress.Country);
                            _this.tempBillingStreet(billingAddress.Street);
                            _this.tempBillingStreet2(billingAddress.Street2);
                            _this.tempBillingCity(billingAddress.City);
                            _this.tempBillingState(billingAddress.State);
                            _this.tempBillingZipcode(billingAddress.ZipCode);
                            _this.tempBillingAddressType(billingAddress.AddressType);
                            if (billingAddress.RecordId != null && billingAddress.RecordId != 0)
                                _this.tempBillingRecordId(billingAddress.RecordId);
                            _this.tempBillingPhone(AFM.Utils.RemovePhoneFormat(billingAddress.Phone));
                            _this.tempBillingEmail(billingAddress.Email);
                            _this.BillingconfirmEmailValue(billingAddress.Email);
                        }
                    });
                };
                CreateAddress.prototype.resetDeliveryMethods = function () {
                    this.availableDeliveryMethods(null);
                    this.orderShippingOptions(new Controls.SelectedDeliveryOptionClass(null));
                };

                CreateAddress.prototype.getUserCartInfo = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText);
                    this.IsCartInfoLoaded = true;
                    Controls.AFMExtendedService.GetUserCartInfo().done(function (data) {
                        if (!AFM.Utils.isNullOrUndefined(data)) {
                            if (data.ShippingAddress != null && data.ShippingAddress.FirstName != null) {
                                _this.ShippingAddress = data.ShippingAddress;
                                _this.tempFirstName(_this.ShippingAddress.FirstName);
                                _this.tempLastName(_this.ShippingAddress.LastName);
                                _this.tempStreet(_this.ShippingAddress.Street);
                                if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Street2))
                                    _this.tempStreet2(_this.ShippingAddress.Street2);
                                else
                                    _this.tempStreet2('');
                                _this.tempCity(_this.ShippingAddress.City);
                                _this.tempState(_this.ShippingAddress.State);
                                _this.tempCountry(_this.ShippingAddress.Country);
                                _this.tempZipCode(_this.ShippingAddress.ZipCode);

                                _this.tempPhone(AFM.Utils.RemovePhoneFormat(_this.ShippingAddress.Phone));
                                _this.tempPhone2(AFM.Utils.RemovePhoneFormat(_this.ShippingAddress.Phone2));
                                _this.tempPhone3(AFM.Utils.RemovePhoneFormat(_this.ShippingAddress.Phone3));
                                _this.tempEmail(_this.ShippingAddress.Email);
                                _this.tempEmail2(_this.ShippingAddress.Email2);
                                _this.tempAddressType(Controls.AddressType.Delivery);

                                if (_this.ShippingAddress.RecordId != null || _this.ShippingAddress.RecordId != 0)
                                    _this.tempRecordId(_this.ShippingAddress.RecordId);

                                if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Phone))
                                    _this.ShippingAddress.Phone = AFM.Utils.SetPhoneFormat(_this.tempPhone());
                                if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Phone2))
                                    _this.ShippingAddress.Phone2 = AFM.Utils.SetPhoneFormat(_this.tempPhone2());
                                if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Phone3))
                                    _this.ShippingAddress.Phone3 = AFM.Utils.SetPhoneFormat(_this.tempPhone3());

                                _this.ShippingconfirmEmailValue(_this.ShippingAddress.Email);
                            } else {
                                _this.tempState('');
                            }

                            if (data.PaymentAddress != null && data.PaymentAddress.FirstName != null)
                                _this.PaymentAddress = data.PaymentAddress;
                            else if (AFM.Utils.isNullOrEmpty(_this.PaymentAddress) || AFM.Utils.isNullOrEmpty(_this.PaymentAddress.FirstName)) {
                                _this.PaymentAddress = new Controls.AddressClass(null);
                            }

                            _this.tempBillingFirstName(_this.PaymentAddress.FirstName);
                            _this.tempBillingLastName(_this.PaymentAddress.LastName);
                            _this.tempBillingStreet(_this.PaymentAddress.Street);
                            _this.tempBillingStreet2(_this.PaymentAddress.Street2);
                            _this.tempBillingCity(_this.PaymentAddress.City);
                            if (_this.PaymentAddress.State != null)
                                _this.tempBillingState(_this.PaymentAddress.State);
                            else
                                _this.tempBillingState('');
                            _this.tempBillingCountry(_this.PaymentAddress.Country);
                            _this.tempBillingZipcode(_this.PaymentAddress.ZipCode);
                            _this.tempBillingEmail(_this.PaymentAddress.Email);
                            _this.tempBillingPhone(AFM.Utils.RemovePhoneFormat(_this.PaymentAddress.Phone));
                            _this.BillingconfirmEmailValue(_this.PaymentAddress.Email);

                            _this.tempBillingAddressType(Controls.AddressType.Invoice);
                            if (!AFM.Utils.isNullOrEmpty(_this.PaymentAddress.Phone))
                                _this.PaymentAddress.Phone = AFM.Utils.SetPhoneFormat(_this.tempBillingPhone());

                            if (_this.tempFirstName() == _this.tempBillingFirstName() && _this.tempLastName() == _this.tempBillingLastName() && _this.tempStreet() == _this.tempBillingStreet() && _this.tempStreet2() == _this.tempBillingStreet2() && _this.tempCity() == _this.tempBillingCity() && _this.tempState() == _this.tempBillingState() && _this.tempCountry() == _this.tempBillingCountry() && _this.tempZipCode() == _this.tempBillingZipcode() && _this.tempPhone() == _this.tempBillingPhone() && _this.tempEmail() == _this.tempBillingEmail()) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(true);
                            } else {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                            }
                        }
                        _this.IsEditAllowed = true;

                        if (!AFM.Utils.isNullOrEmpty(data.IsOkToText))
                            _this.isOktoText(data.IsOkToText);

                        if (!AFM.Utils.isNullOrEmpty(data.IsOptinDeals))
                            _this.isOptinDeals(data.IsOptinDeals);

                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (errors) {
                    });
                };

                CreateAddress.prototype.UseAddressButton = function (data) {
                    this.HideAddressFieldErrors();
                    this.hideZipCodeMasterError();

                    this.UpdateShippingAddressfromAvailableAddresses(data);
                    this.shippingOptionsNextClick();
                    var $wrapper = $(".msax-ShippingAddressform");

                    $wrapper.find("input,select").each(function (index, elem) {
                        $(elem).change();
                        $(elem).blur();
                    });
                };

                CreateAddress.prototype.validatePhoneTextBox = function (element, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");
                    var regExp = new RegExp('^\\d{10}$');
                    if (!AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        if (!regExp.test(srcElement.value)) {
                            $("#" + srcElement.id).attr("msax-isValid", false);
                            $(document).find('.msax-OrderPhoneNumber1Error').show();
                            $("#" + srcElement.id).addClass("msax-RequiredError");
                            return false;
                        }
                        $("#" + srcElement.id).attr("msax-isValid", true);
                        $(document).find('.msax-OrderPhoneNumber1Error').hide();
                    } else {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-OrderPhoneNumber1Error').show();
                        $("#" + srcElement.id).addClass("msax-RequiredError");
                        return false;
                    }
                    Controls.CartBase.showError(false);
                    return true;
                };

                CreateAddress.prototype.validateBillingPhoneTextBox = function (element, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");
                    var regExp = new RegExp('^\\d{10}$');
                    if (!AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        if (!regExp.test(srcElement.value)) {
                            $("#" + srcElement.id).attr("msax-isValid", false);
                            $(document).find('.msax-PaymentPhoneNumber1Error').show();
                            $("#" + srcElement.id).addClass("msax-RequiredError");
                            return false;
                        }
                        $("#" + srcElement.id).attr("msax-isValid", true);
                        $(document).find('.msax-PaymentPhoneNumber1Error').hide();
                    } else {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-PaymentPhoneNumber1Error').show();
                        $("#" + srcElement.id).addClass("msax-RequiredError");
                        return false;
                    }
                    Controls.CartBase.showError(false);
                    return true;
                };

                CreateAddress.prototype.validateEmail = function (element, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");

                    var regExp = new RegExp('^[\\w-]+(?:\\.[\\w-]+)*@((?=\\d+\\.\\d+\\.\\d+\\.\\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$)|((?:[\\w-]+\\.)+[a-zA-Z]{2,7}$)');
                    if (!AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        if (!regExp.test(srcElement.value)) {
                            $("#" + srcElement.id).attr("msax-isValid", false);
                            if (srcElement.id == "ShippingEmail") {
                                $(document).find('.msax-ShippingEmailError').show();
                                $("#" + srcElement.id).addClass("msax-RequiredError");
                            } else {
                                $(document).find('.msax-EmailTextBoxError').show();
                                $("#" + srcElement.id).addClass("msax-RequiredError");
                            }
                            return false;
                        }
                    } else {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        if (srcElement.id == "ShippingEmail")
                            $(document).find('.msax-ShippingEmailError').show();
                        else
                            $(document).find('.msax-EmailTextBoxError').show();
                        $("#" + srcElement.id).addClass("msax-RequiredError");
                        return true;
                    }
                    $("#" + srcElement.id).attr("msax-isValid", true);
                    if (srcElement.id == "ShippingEmail")
                        $(document).find('.msax-ShippingEmailError').hide();
                    else
                        $(document).find('.msax-EmailTextBoxError').hide();
                    return true;
                };

                CreateAddress.prototype.validateAddressName = function (srcElement) {
                    var $element = $(srcElement);
                    var value = $element.val();
                    var regExp = new RegExp('^[a-zA-Z ]{0,25}$');
                    if (!AFM.Utils.isNullOrEmpty(value)) {
                        if (!regExp.test(value)) {
                            return false;
                        }
                    } else {
                        return false;
                    }

                    return true;
                };

                CreateAddress.prototype.validateEmail2 = function (element, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");

                    var regExp = new RegExp('^[\\w-]+(?:\\.[\\w-]+)*@((?=\\d+\\.\\d+\\.\\d+\\.\\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$)|((?:[\\w-]+\\.)+[a-zA-Z]{2,7}$)');
                    if (!AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        if (!regExp.test(srcElement.value)) {
                            $("#" + srcElement.id).attr("msax-isValid", false);
                            $(document).find('.msax-ShippingEmail2Error').show();
                            $("#" + srcElement.id).addClass("msax-RequiredError");
                            return false;
                        }
                    }
                    $("#" + srcElement.id).attr("msax-isValid", true);
                    $(document).find('.msax-ShippingEmail2Error').hide();
                    return true;
                    Controls.CartBase.showError(false);
                    return true;
                };

                CreateAddress.prototype.validateAltPhoneTextBox = function (element, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");
                    var regExp = new RegExp('^\\d{10}$');
                    if (!AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        if (!regExp.test(srcElement.value)) {
                            $("#" + srcElement.id).attr("msax-isValid", false);
                            if (srcElement.id == "OrderPhoneNumber2")
                                $(document).find('.msax-OrderPhoneNumber2Error').show();
                            if (srcElement.id == "OrderPhoneNumber3")
                                $(document).find('.msax-OrderPhoneNumber3Error').show();
                            $("#" + srcElement.id).addClass("msax-RequiredError");
                            return false;
                        }
                    }
                    $("#" + srcElement.id).attr("msax-isValid", true);
                    if (srcElement.id == "OrderPhoneNumber2")
                        $(document).find('.msax-OrderPhoneNumber2Error').hide();
                    if (srcElement.id == "OrderPhoneNumber3")
                        $(document).find('.msax-OrderPhoneNumber3Error').hide();

                    Controls.CartBase.showError(false);
                    return true;
                };

                CreateAddress.prototype.validateInputOnBlur = function (element, valueAccessor) {
                    this.hideZipCodeMasterError();
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");
                    if (!AFM.Utils.isNullOrUndefined(srcElement)) {
                        if (!AFM.Utils.isNullOrEmpty(srcElement.value)) {
                            $("#" + srcElement.id).attr("msax-isValid", true);
                            $(document).find('.msax-' + srcElement.id + 'Error').hide();
                            return true;
                        } else {
                            $("#" + srcElement.id).attr("msax-isValid", false);
                            $(document).find('.msax-' + srcElement.id + 'Error').text(srcElement.title);
                            $(document).find('.msax-' + srcElement.id + 'Error').show();
                            $("#" + srcElement.id).addClass("msax-RequiredError");
                            return true;
                        }
                    }
                    return true;
                };

                CreateAddress.prototype.showZipCodeMasterError = function () {
                    $(document).find('.msax-PaymentAddressCitySBError').show();
                    $(document).find('#PaymentAddressCity').attr("msax-isValid", false);
                    $(document).find('.msax-PaymentAddressStateSBError').show();
                    $(document).find('#PaymentAddressState').attr("msax-isValid", false);
                    $(document).find('.msax-PaymentAddressZipCodeSBError').show();
                    $(document).find('#PaymentAddressZipCode').attr("msax-isValid", false);
                };

                CreateAddress.prototype.hideZipCodeMasterError = function () {
                    $(document).find('.msax-PaymentAddressCitySBError').hide();
                    $(document).find('#PaymentAddressCity').attr("msax-isValid", true);
                    $(document).find('.msax-PaymentAddressStateSBError').hide();
                    $(document).find('#PaymentAddressState').attr("msax-isValid", true);
                    $(document).find('.msax-PaymentAddressZipCodeSBError').hide();
                    $(document).find('#PaymentAddressZipCode').attr("msax-isValid", true);
                };

                CreateAddress.prototype.paymentInformationNextClick = function () {
                    var _this = this;
                    Controls.CartBase.showError(false);
                    this.userCartInfo.PaymentAddress = this.PaymentAddress;
                    this.userCartInfo.ShippingAddress = this.ShippingAddress;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    Controls.AFMExtendedService.ValidateZipcode(this.PaymentAddress.Country, this.PaymentAddress.ZipCode).done(function (data) {
                        if (data) {
                            _this.userCartInfo.IsOkToText = _this.isOktoText();

                            _this.userCartInfo.IsOptinDeals = _this.isOptinDeals();

                            if (!AFM.Utils.isNullOrEmpty(_this.userCartInfo.PaymentAddress)) {
                                _this.userCartInfo.PaymentAddress.AddressType = Controls.AddressType.Invoice;
                                _this.userCartInfo.PaymentAddress.Phone = AFM.Utils.SetPhoneFormat(_this.userCartInfo.PaymentAddress.Phone);
                            }

                            Controls.AFMExtendedService.ValidateAddress(_this.userCartInfo.PaymentAddress).done(function (data) {
                                _this.hideZipCodeMasterError();

                                if (data.IsAddressValid && data.IsServiceVerified) {
                                    _this.avaSuggestedAddress = data.suggestedAddress;

                                    _this.avaSuggestedAddress.Street2 = data.Street2;

                                    if (AFM.Utils.isNullOrEmpty(_this.PaymentAddress.Street2)) {
                                        _this.PaymentAddress.Street2 = "";
                                    }

                                    if (_this.PaymentAddress.Street.toLowerCase() != data.suggestedAddress.Street.toLowerCase() || _this.PaymentAddress.Street2.toLowerCase() != data.Street2.toLowerCase() || _this.PaymentAddress.City.toLowerCase() != data.suggestedAddress.City.toLowerCase() || _this.PaymentAddress.State.toLowerCase() != data.suggestedAddress.State.toLowerCase() || _this.PaymentAddress.ZipCode.toLowerCase() != data.suggestedAddress.ZipCode.toLowerCase()) {
                                        _this.isShippingFromDialog = false;

                                        if (!AFM.Utils.isNullOrEmpty(_this.avaSuggestedAddress.Street2)) {
                                            _this.suggestedAddressText = '<br/>' + _this.avaSuggestedAddress.Street + '<br/>' + _this.avaSuggestedAddress.Street2 + '<br/>' + _this.avaSuggestedAddress.City + '<br/>' + _this.avaSuggestedAddress.State + '<br/>' + _this.avaSuggestedAddress.ZipCode;
                                        } else {
                                            _this.suggestedAddressText = '<br/>' + _this.avaSuggestedAddress.Street + '<br/>' + _this.avaSuggestedAddress.City + '<br/>' + _this.avaSuggestedAddress.State + '<br/>' + _this.avaSuggestedAddress.ZipCode;
                                        }

                                        Controls.LoadingOverlay.openAddressDialog(_this.addressConfirmDialog, _this.ReplacerSuggestedAddress, _this.CancelSuggested, _this, _this.suggestedAddressText, Controls.Resources.String_1419, Controls.Resources.String_123);
                                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                    } else {
                                        _this.SetUserCartDataInfowithRedirect(_this.userCartInfo);
                                    }
                                } else if (data.IsAddressValid == false && data.IsServiceVerified == false) {
                                    Controls.errorMessage = Controls.Resources.String_1258;
                                    Controls.CartBase.showError(true);
                                    _this.showZipCodeMasterError();
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                } else if (data.IsAddressValid == true && data.IsServiceVerified == false) {
                                    Controls.CartBase.showError(false);
                                    _this.SetUserCartDataInfowithRedirect(_this.userCartInfo);
                                } else {
                                    Controls.errorMessage = Controls.Resources.String_109;
                                    Controls.CartBase.showError(true);
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                }
                            });

                            (!_this.CartMode.isBillinggModePaased);
                            _this.CartMode.isBillinggModePaased = true;
                        } else {
                            Controls.errorMessage = Controls.Resources.String_1150;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        }
                    }).fail(function (error) {
                        Controls.errorMessage = Controls.Resources.String_1151;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.SetUserCartDataInfowithRedirect = function (userCartInfo) {
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    Controls.AFMExtendedService.SetUserCartInfo(userCartInfo).done(function (data) {
                        if (Controls.IsConfirmedit) {
                            Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ConfirmView);
                        } else {
                            var cartIdVal = Controls.CartData().CartId;

                            Controls.AFMExtendedService.RedirectToPayment().done(function (data) {
                                window.location.href = data;
                            });
                            ;
                        }
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_66;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.paymentInformationPreviousClick = function () {
                    Controls.CartBase.showError(false);
                    Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ShippingViewCompleted);
                };

                CreateAddress.prototype.shippingOptionsNextClick = function () {
                    var _this = this;
                    Controls.CartBase.showError(false);

                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    Controls.AFMExtendedService.ValidateZipcode(this.ShippingAddress.Country, this.ShippingAddress.ZipCode).done(function (data) {
                        if (data) {
                            if (!_this.CartMode.isShippingModePaased)
                                _this.CartMode.isShippingModePaased = true;

                            if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Phone)) {
                                _this.ShippingAddress.Phone = AFM.Utils.SetPhoneFormat(_this.ShippingAddress.Phone);
                            }
                            if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Phone2)) {
                                _this.ShippingAddress.Phone2 = AFM.Utils.SetPhoneFormat(_this.ShippingAddress.Phone2);
                            }
                            if (!AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Phone3)) {
                                _this.ShippingAddress.Phone3 = AFM.Utils.SetPhoneFormat(_this.ShippingAddress.Phone3);
                            }

                            if (_this.ShippingAddress != null) {
                                _this.ShippingAddress.AddressType = Controls.AddressType.Delivery;
                            }
                            Controls.AFMExtendedService.ValidateAddress(_this.ShippingAddress).done(function (data) {
                                if (data.IsAddressValid) {
                                    _this.avaSuggestedAddress = data.suggestedAddress;

                                    _this.avaSuggestedAddress.Street2 = data.Street2;

                                    if (AFM.Utils.isNullOrEmpty(_this.ShippingAddress.Street2)) {
                                        _this.ShippingAddress.Street2 = "";
                                    }

                                    if (_this.ShippingAddress.Street.toLowerCase() != data.suggestedAddress.Street.toLowerCase() || _this.ShippingAddress.Street2.toLowerCase() != data.Street2.toLowerCase() || _this.ShippingAddress.City.toLowerCase() != data.suggestedAddress.City.toLowerCase() || _this.ShippingAddress.State.toLowerCase() != data.suggestedAddress.State.toLowerCase() || _this.ShippingAddress.ZipCode.toLowerCase() != data.suggestedAddress.ZipCode.toLowerCase()) {
                                        _this.isShippingFromDialog = true;

                                        if (!AFM.Utils.isNullOrEmpty(_this.avaSuggestedAddress.Street2)) {
                                            _this.suggestedAddressText = '<br/>' + _this.avaSuggestedAddress.Street + '<br/>' + _this.avaSuggestedAddress.Street2 + '<br/>' + _this.avaSuggestedAddress.City + '<br/>' + _this.avaSuggestedAddress.State + '<br/>' + _this.avaSuggestedAddress.ZipCode;
                                        } else {
                                            _this.suggestedAddressText = '<br/>' + _this.avaSuggestedAddress.Street + '<br/>' + _this.avaSuggestedAddress.City + '<br/>' + _this.avaSuggestedAddress.State + '<br/>' + _this.avaSuggestedAddress.ZipCode;
                                        }

                                        Controls.LoadingOverlay.openAddressDialog(_this.addressConfirmDialog, _this.ReplacerSuggestedAddress, _this.CancelSuggested, _this, _this.suggestedAddressText, Controls.Resources.String_1419, Controls.Resources.String_123);
                                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                    } else {
                                        _this.getDeliveryMethods();
                                    }
                                } else {
                                    if (!AFM.Utils.isNullOrEmpty(data) && !AFM.Utils.isNullOrEmpty(data.ErrorMessage) && data.ErrorMessage.toLowerCase() == Controls.Resources.String_1167)
                                        Controls.errorMessage = Controls.Resources.String_1166;
                                    else
                                        Controls.errorMessage = Controls.Resources.String_1111;
                                    Controls.CartBase.showError(true);
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                }
                            }).fail(function (error) {
                                Controls.errorMessage = Controls.Resources.String_1151;
                                Controls.CartBase.showError(true);
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            });
                        } else {
                            Controls.errorMessage = Controls.Resources.String_1150;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        }
                    }).fail(function (error) {
                        Controls.errorMessage = Controls.Resources.String_1151;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.shippingOptionsPreviousClick = function () {
                    Controls.CartBase.showError(false);
                    if (!AFM.Utils.isNullOrEmpty(msaxValues.msax_GoBackUrl))
                        window.location.href = msaxValues.msax_GoBackUrl;
                };

                CreateAddress.prototype.getDeliveryMethods = function () {
                    var _this = this;
                    this.resetDeliveryMethods();
                    var shippingOptions = this.orderShippingOptions();
                    shippingOptions.CustomAddress = this.ShippingAddress;
                    this.userCartInfo.ShippingAddress = this.ShippingAddress;
                    this.userCartInfo.PaymentAddress = this.PaymentAddress;

                    this.userCartInfo.IsOkToText = this.isOktoText();

                    this.userCartInfo.IsOptinDeals = this.isOptinDeals();

                    Controls.AFMExtendedService.SetUserCartInfo(this.userCartInfo).done(function (tempUSer) {
                        _this.AFMZipCode(_this.ShippingAddress.ZipCode.substr(0, 5));
                        _this.updateZipCodeInfo();
                        shippingOptions.LineId = Controls.CartData().Items[0].LineId;
                        shippingOptions.DeliveryPreferenceId = "1";
                        _this.orderShippingOptions(shippingOptions);
                        Controls.CheckoutService.GetDeliveryOptionsInfo().done(function (data) {
                            if (data.AddressVerficationResult) {
                                _this.availableDeliveryMethods(data.DeliveryOptions);
                                var shippingOptions = _this.orderShippingOptions();
                                if (_this.availableDeliveryMethods().length == 1) {
                                    shippingOptions.DeliveryModeText = _this.availableDeliveryMethods()[0].Description;
                                    shippingOptions.DeliveryModeId = _this.availableDeliveryMethods()[0].Id;
                                }
                                _this.orderShippingOptions(shippingOptions);
                                _this.syncDeliveryOptionsNextClick();
                                _this.shippingAddressView.hide();
                                $('.msax-ShippingAddressCollection').css('display', 'none');

                                Controls.CartBase.showError(false);

                                if (Controls.IsConfirmedit)
                                    Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ConfirmView);
                                else
                                    Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.BillingView);

                                _this.IsEditAllowed = true;
                                $("html, body").animate({ scrollTop: 0 }, "slow");
                            } else {
                                Controls.errorMessage = Controls.Resources.String_1111;
                                Controls.CartBase.showError(true);
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            }
                        }).fail(function (errors) {
                            Controls.errorMessage = Controls.Resources.String_66;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    });
                };

                CreateAddress.prototype.syncDeliveryOptionsNextClick = function () {
                    this.orderShippingOptions().DeliveryModeId = "HD";

                    this.setShippingOptions();
                };

                CreateAddress.prototype.selectShippingOption = function (selectedShippingOption) {
                    this.orderShippingOptions().DeliveryModeText = selectedShippingOption.Description;
                    return true;
                };

                CreateAddress.prototype.setShippingOptions = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);

                    Controls.AFMExtendedService.SetShippingtoLineItems(this.orderShippingOptions(), Controls.ShoppingCartDataLevel.All).done(function (data) {
                        _this.updateSelectedShippingOptions(data.ShoppingCart);
                        _this.IsEditAllowed = true;
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_67;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.updateSelectedShippingOptions = function (cart) {
                    cart.SelectedDeliveryOption = this.orderShippingOptions();
                    for (var i = 0; i < cart.Items.length; i++) {
                        cart.Items[i].SelectedDeliveryOption = this.orderShippingOptions();
                    }

                    Controls.CartData(cart);
                };

                CreateAddress.prototype.updateZipCodeInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.SetZipCode(this.AFMZipCode(), false).done(function (data) {
                        if (_this.AFMZipCode() != Controls.AFMZipCodeData()) {
                            Controls.errorMessage = Controls.Resources.String_1174;
                            Controls.CartBase.showInfo(true);
                        } else
                            Controls.CartBase.showInfo(false);

                        Controls.AFMZipCodeData(_this.AFMZipCode());
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_113;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.getZipCodeInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.GetZipCode().done(function (data) {
                        _this.AFMZipCode(data.AFMZipCode.substr(0, 5));
                        Controls.AFMZipCodeData(_this.AFMZipCode());

                        if (msaxValues.msax_IsDemoMode.toLowerCase() == "true")
                            _this.autoFillCheckout();
                        else {
                            _this.tempCountry('USA');
                            _this.tempBillingCountry('USA');
                            _this.tempZipCode(_this.AFMZipCode());
                        }

                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (error) {
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                CreateAddress.prototype.loadXMLDoc = function (filename) {
                    var xhttp;

                    if (XMLHttpRequest) {
                        xhttp = new XMLHttpRequest();
                    } else {
                        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xhttp.open("GET", filename, false);
                    xhttp.send();
                    return xhttp.responseXML;
                };

                CreateAddress.prototype.autoFillCheckout = function () {
                    var xmlDoc = this.loadXMLDoc("/Common/DemoData/CheckoutData.xml");

                    var address = xmlDoc.getElementsByTagName(Controls.Resources.String_22);
                    var name = address[0].getElementsByTagName(Controls.Resources.String_29);
                    var firstname = address[0].getElementsByTagName(Controls.Resources.String_1186.replace(' ', ''));
                    var lastname = address[0].getElementsByTagName(Controls.Resources.String_1188.replace(' ', ''));
                    var street = address[0].getElementsByTagName(Controls.Resources.String_55);
                    var city = address[0].getElementsByTagName(Controls.Resources.String_23);
                    var state = address[0].getElementsByTagName(Controls.Resources.String_56);
                    var country = address[0].getElementsByTagName(Controls.Resources.String_1122);
                    var zipcode = address[0].getElementsByTagName(Controls.Resources.String_57);
                    var email = xmlDoc.getElementsByTagName(Controls.Resources.String_58);

                    var payment = xmlDoc.getElementsByTagName(Controls.Resources.String_59);
                    var cardNumber = payment[0].getElementsByTagName(Controls.Resources.String_60);
                    var ccid = payment[0].getElementsByTagName(Controls.Resources.String_39);

                    var cartdata = Controls.CartData();
                    if (cartdata != null) {
                        cartdata.SelectedDeliveryOption = new Controls.SelectedDeliveryOptionClass(null);
                        cartdata.SelectedDeliveryOption.CustomAddress = new Controls.AddressClass(null);
                        cartdata.SelectedDeliveryOption.CustomAddress.FirstName = firstname[0].textContent;
                        cartdata.SelectedDeliveryOption.CustomAddress.LastName = lastname[0].textContent;
                        Controls.CartData(cartdata);
                    }

                    this.tempStreet(street[0].textContent);
                    this.tempCity(city[0].textContent);
                    this.tempState(state[0].textContent);
                    this.tempCountry(country[0].textContent);
                    this.tempFirstName(firstname[0].textContent);
                    this.tempLastName(lastname[0].textContent);
                    if (this.AFMZipCode() != null)
                        this.tempZipCode(this.AFMZipCode());
                    else
                        this.tempZipCode(zipcode[0].textContent);
                };

                CreateAddress.prototype.validateShippingConfirmEmail = function (srcElement) {
                    var $element = $(srcElement);
                    var value = $element.val();

                    if (AFM.Utils.isNullOrEmpty($element.val()) && AFM.Utils.isNullOrUndefined(this.ShippingAddress.Email)) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError1').show();
                        return false;
                    } else if (AFM.Utils.isNullOrUndefined(this.ShippingAddress.Email) && !AFM.Utils.isNullOrEmpty($element.val())) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError1').show();
                        return false;
                    } else if (AFM.Utils.isNullOrEmpty($element.val()) && AFM.Utils.isNullOrEmpty(this.ShippingAddress.Email)) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError1').show();
                        return false;
                    } else if ($element.val().toString().toLowerCase() !== this.ShippingAddress.Email.toString().toLowerCase()) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError2').show();
                        return false;
                    }
                    $element.attr("msax-isValid", true);
                    $(document).find('.msax-ShippingConfirmEmailError1').hide();
                    $(document).find('.msax-ShippingConfirmEmailError2').hide();
                    Controls.CartBase.showError(false);
                    return true;
                };
                CreateAddress.prototype.validateBillingConfirmEmail = function (srcElement) {
                    var $element = $(srcElement);
                    var value = $element.val();

                    if (AFM.Utils.isNullOrEmpty($element.val()) && AFM.Utils.isNullOrUndefined(this.tempBillingEmail())) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-BillingConfirmEmailError1').show();
                        return false;
                    } else if (AFM.Utils.isNullOrUndefined(this.tempBillingEmail()) && !AFM.Utils.isNullOrEmpty($element.val())) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-BillingConfirmEmailError1').show();
                        return false;
                    } else if (AFM.Utils.isNullOrEmpty($element.val()) && AFM.Utils.isNullOrEmpty(this.tempBillingEmail())) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-BillingConfirmEmailError1').show();
                        return false;
                    } else if ($element.val().toString().toLowerCase() !== this.tempBillingEmail().toString().toLowerCase()) {
                        $(srcElement).attr("msax-isValid", false);
                        $(document).find('.msax-BillingConfirmEmailError2').show();
                        return false;
                    }
                    $element.attr("msax-isValid", true);
                    Controls.CartBase.showError(false);
                    $(document).find('.msax-BillingConfirmEmailError1').hide();
                    $(document).find('.msax-BillingConfirmEmailError2').hide();
                    return true;
                };

                CreateAddress.prototype.validateShippingConfirmEmailTextBox = function (element, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    if (AFM.Utils.isNullOrEmpty(srcElement.value) && AFM.Utils.isNullOrUndefined(this.ShippingAddress.Email)) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError').show();
                        return false;
                    } else if (AFM.Utils.isNullOrUndefined(this.ShippingAddress.Email) && !AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError').show();
                        return false;
                    } else if (AFM.Utils.isNullOrEmpty(srcElement.value) && AFM.Utils.isNullOrEmpty(this.ShippingAddress.Email)) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError').show();
                        return false;
                    } else if (srcElement.value.toString().toLowerCase() !== this.ShippingAddress.Email.toString().toLowerCase()) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ShippingConfirmEmailError1').show();
                        return false;
                    }
                    $("#" + srcElement.id).attr("msax-isValid", true);
                    $(document).find('.msax-ShippingConfirmEmailError').hide();
                    $(document).find('.msax-ShippingConfirmEmailError1').hide();
                    Controls.CartBase.showError(false);
                    return true;
                };

                CreateAddress.prototype.validateBillingConfirmEmailTextBox = function (selement, valueAccessor) {
                    var srcElement = valueAccessor.target;
                    $("#" + srcElement.id).removeClass("msax-RequiredError");
                    if (AFM.Utils.isNullOrEmpty(srcElement.value) && AFM.Utils.isNullOrUndefined(this.tempBillingEmail())) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ConfirmBillingEmailTextBoxError').show();
                        return false;
                    } else if (AFM.Utils.isNullOrUndefined(this.tempBillingEmail()) && !AFM.Utils.isNullOrEmpty(srcElement.value)) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ConfirmBillingEmailTextBoxError').show();
                        return false;
                    } else if (AFM.Utils.isNullOrEmpty(srcElement.value) && AFM.Utils.isNullOrEmpty(this.tempBillingEmail())) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ConfirmBillingEmailTextBoxError').show();
                        return false;
                    } else if (srcElement.value.toString().toLowerCase() !== this.tempBillingEmail().toString().toLowerCase()) {
                        $("#" + srcElement.id).attr("msax-isValid", false);
                        $(document).find('.msax-ConfirmBillingEmailTextBoxError1').show();
                        return false;
                    }
                    $("#" + srcElement.id).attr("msax-isValid", true);
                    Controls.CartBase.showError(false);
                    $(document).find('.msax-ConfirmBillingEmailTextBoxError').hide();
                    $(document).find('.msax-ConfirmBillingEmailTextBoxError1').hide();
                    return true;
                };

                CreateAddress.prototype.InitateTempAddressDetails = function () {
                    var _this = this;
                    this.tempRecordId = ko.observable('');
                    this.tempRecordId.subscribe(function (newValue) {
                        if (_this.ShippingAddress.RecordId != newValue) {
                            _this.ShippingAddress.RecordId = newValue;
                        }
                    }, this);

                    this.tempAddressType = ko.observable('');
                    this.tempAddressType.subscribe(function (newValue) {
                        _this.ShippingAddress.AddressType = Controls.AddressType.Delivery;
                    }, this);

                    this.tempStreet = ko.observable('');
                    this.tempStreet.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Street != newValue) {
                            _this.ShippingAddress.Street = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempStreet2 = ko.observable('');
                    this.tempStreet2.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Street2 != newValue) {
                            _this.ShippingAddress.Street2 = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempCity = ko.observable('');
                    this.tempCity.subscribe(function (newValue) {
                        if (_this.ShippingAddress.City != newValue) {
                            _this.ShippingAddress.City = AFM.Utils.Trim(newValue);
                        }
                    }, this);
                    this.tempState = ko.observable('');
                    this.tempState.subscribe(function (newValue) {
                        if (_this.ShippingAddress.State != newValue) {
                            _this.ShippingAddress.State = newValue;
                        }
                    }, this);
                    this.tempZipCode = ko.observable('');
                    this.tempZipCode.subscribe(function (newValue) {
                        if (_this.ShippingAddress.ZipCode != newValue) {
                            _this.ShippingAddress.ZipCode = AFM.Utils.Trim(newValue);
                        }
                    }, this);
                    this.tempFirstName = ko.observable('');
                    this.tempFirstName.subscribe(function (newValue) {
                        if (!AFM.Utils.isNullOrUndefined(newValue))
                            newValue = newValue.replace(/[^a-zA-Z ]/gi, '');
                        if (_this.tempFirstName() != newValue)
                            _this.tempFirstName(newValue);
                        if (_this.ShippingAddress.FirstName != newValue) {
                            _this.ShippingAddress.FirstName = AFM.Utils.Trim(newValue);
                        }
                    }, this);
                    this.tempLastName = ko.observable('');
                    this.tempLastName.subscribe(function (newValue) {
                        if (!AFM.Utils.isNullOrUndefined(newValue))
                            newValue = newValue.replace(/[^a-zA-Z ]/gi, '');
                        if (_this.tempLastName() != newValue)
                            _this.tempLastName(newValue);
                        if (_this.ShippingAddress.LastName != newValue) {
                            _this.ShippingAddress.LastName = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempCountry = ko.observable('');
                    this.tempCountry.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Country != newValue) {
                            _this.ShippingAddress.Country = newValue;
                        }
                    }, this);

                    this.tempEmail = ko.observable('');
                    this.tempEmail.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Email != newValue) {
                            _this.ShippingAddress.Email = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempEmail2 = ko.observable('');
                    this.tempEmail2.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Email2 != newValue) {
                            _this.ShippingAddress.Email2 = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempPhone = ko.observable('');
                    this.tempPhone.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Phone != newValue) {
                            if (!AFM.Utils.isNullOrEmpty(newValue))
                                _this.ShippingAddress.Phone = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempPhone2 = ko.observable('');
                    this.tempPhone2.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Phone2 != newValue) {
                            if (!AFM.Utils.isNullOrUndefined(newValue))
                                _this.ShippingAddress.Phone2 = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempPhone3 = ko.observable('');
                    this.tempPhone3.subscribe(function (newValue) {
                        if (_this.ShippingAddress.Phone3 != newValue) {
                            if (!AFM.Utils.isNullOrUndefined(newValue))
                                _this.ShippingAddress.Phone3 = AFM.Utils.Trim(newValue);
                        }
                    }, this);

                    this.tempBillingFirstName = ko.observable('');
                    this.tempBillingFirstName.subscribe(function (newValue) {
                        if (!AFM.Utils.isNullOrUndefined(newValue))
                            newValue = newValue.replace(/[^a-zA-Z ]/gi, '');
                        if (_this.tempBillingFirstName() != newValue)
                            _this.tempBillingFirstName(newValue);
                        if (_this.PaymentAddress.FirstName != newValue) {
                            _this.PaymentAddress.FirstName = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingLastName = ko.observable('');
                    this.tempBillingLastName.subscribe(function (newValue) {
                        if (!AFM.Utils.isNullOrUndefined(newValue))
                            newValue = newValue.replace(/[^a-zA-Z ]/gi, '');
                        if (_this.tempBillingLastName() != newValue)
                            _this.tempBillingLastName(newValue);
                        if (_this.PaymentAddress.LastName != newValue) {
                            _this.PaymentAddress.LastName = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingStreet = ko.observable('');
                    this.tempBillingStreet.subscribe(function (newValue) {
                        if (_this.PaymentAddress.Street != newValue) {
                            _this.PaymentAddress.Street = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingStreet2 = ko.observable('');
                    this.tempBillingStreet2.subscribe(function (newValue) {
                        if (_this.PaymentAddress.Street2 != newValue) {
                            _this.PaymentAddress.Street2 = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingCity = ko.observable('');
                    this.tempBillingCity.subscribe(function (newValue) {
                        if (_this.PaymentAddress.City != newValue) {
                            _this.PaymentAddress.City = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingState = ko.observable('');
                    this.tempBillingState.subscribe(function (newValue) {
                        if (_this.PaymentAddress.State != newValue) {
                            _this.PaymentAddress.State = newValue;
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingZipcode = ko.observable('');
                    this.tempBillingZipcode.subscribe(function (newValue) {
                        if (_this.PaymentAddress.ZipCode != newValue) {
                            _this.PaymentAddress.ZipCode = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingCountry = ko.observable('');
                    this.tempBillingCountry.subscribe(function (newValue) {
                        if (_this.PaymentAddress.Country != newValue) {
                            _this.PaymentAddress.Country = newValue;
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingEmail = ko.observable('');
                    this.tempBillingEmail.subscribe(function (newValue) {
                        if (_this.PaymentAddress.Email != newValue) {
                            _this.PaymentAddress.Email = AFM.Utils.Trim(newValue);
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingPhone = ko.observable('');
                    this.tempBillingPhone.subscribe(function (newValue) {
                        if (_this.PaymentAddress.Phone != newValue) {
                            if (!AFM.Utils.isNullOrEmpty(newValue))
                                _this.PaymentAddress.Phone = AFM.Utils.Trim(newValue);

                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingRecordId = ko.observable('');
                    this.tempBillingRecordId.subscribe(function (newValue) {
                        if (_this.PaymentAddress.RecordId != newValue) {
                            _this.PaymentAddress.RecordId = newValue;
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.tempBillingAddressType = ko.observable('');
                    this.tempBillingAddressType.subscribe(function (newValue) {
                        if (_this.PaymentAddress.AddressType != newValue) {
                            _this.PaymentAddress.AddressType = Controls.AddressType.Invoice;
                            if (_this.IsEditAllowed) {
                                _this.IsEditAllowed = false;
                                _this.isBillingAddressSameAsShippingAddress(false);
                                _this.IsEditAllowed = true;
                            }
                        }
                    }, this);

                    this.isBillingAddressSameAsShippingAddress.subscribe(function (newValue) {
                        if (_this.IsEditAllowed) {
                            if (newValue) {
                                _this.HideAddressFieldErrors();
                                _this.hideZipCodeMasterError();
                                _this.IsEditAllowed = false;
                                _this.tempBillingFirstName(_this.tempFirstName());
                                _this.tempBillingLastName(_this.tempLastName());
                                _this.tempBillingStreet(_this.tempStreet());
                                _this.tempBillingStreet2(_this.tempStreet2());
                                _this.tempBillingState(_this.tempState());
                                _this.tempBillingCity(_this.tempCity());
                                _this.tempBillingCountry(_this.tempCountry());
                                _this.tempBillingZipcode(_this.tempZipCode());
                                _this.tempBillingPhone(_this.tempPhone());
                                _this.tempBillingEmail(_this.tempEmail());
                                _this.BillingconfirmEmailValue(_this.tempEmail());

                                var $wrapper = $(".msax-BillingAddressform");

                                $wrapper.find("input,select").each(function (index, elem) {
                                    $(elem).change();
                                    $(elem).blur();
                                });
                            } else {
                                _this.tempBillingFirstName(null);
                                _this.tempBillingLastName(null);
                                _this.tempBillingStreet(null);
                                _this.tempBillingStreet2(null);
                                _this.tempBillingCity(null);

                                _this.tempBillingState('');
                                _this.tempBillingCountry('USA');
                                _this.tempBillingZipcode(null);
                                _this.tempBillingEmail(null);
                                _this.tempBillingPhone(null);
                                _this.BillingconfirmEmailValue(null);
                            }
                        }
                        _this.IsEditAllowed = true;
                        return newValue;
                    }, this);

                    this.isOptinDeals.subscribe(function (newValue) {
                        return newValue;
                    }, this);

                    this.isOktoText.subscribe(function (newValue) {
                        return newValue;
                    }, this);

                    this.selectedAddress.subscribe(function (newValue) {
                        if (!AFM.Utils.isNullOrUndefined(newValue)) {
                            _this.tempFirstName(newValue.FirstName);
                            _this.tempLastName(newValue.LastName);
                            _this.tempCountry(newValue.Country);
                            _this.tempStreet(newValue.Street);
                            _this.tempStreet2(newValue.Street2);
                            _this.tempCity(newValue.City);
                            _this.tempState(newValue.State);
                            _this.tempZipCode(newValue.ZipCode);
                            _this.tempPhone(AFM.Utils.RemovePhoneFormat(newValue.Phone));
                            _this.tempPhone2(AFM.Utils.RemovePhoneFormat(newValue.Phone2));
                            _this.tempPhone3(AFM.Utils.RemovePhoneFormat(newValue.Phone3));

                            if (!AFM.Utils.isNullOrEmpty(newValue.Phone))
                                _this.ShippingAddress.Phone = _this.tempPhone();
                            if (!AFM.Utils.isNullOrEmpty(newValue.Phone2))
                                _this.ShippingAddress.Phone2 = _this.tempPhone2();
                            if (!AFM.Utils.isNullOrEmpty(newValue.Phone3))
                                _this.ShippingAddress.Phone3 = _this.tempPhone3();

                            _this.tempEmail(newValue.Email);
                            _this.ShippingconfirmEmailValue(newValue.Email);
                            _this.tempEmail2(newValue.Email2);
                            _this.tempAddressType(newValue.AddressType);
                            if (newValue.RecordId != null && newValue.RecordId != 0)
                                _this.tempRecordId(newValue.RecordId);
                        }
                    }, this);
                };
                return CreateAddress;
            })();
            Controls.CreateAddress = CreateAddress;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var Loader = (function () {
                function Loader() {
                    Controls.CartBase._loadingDialog = Controls.CartBase._cartView.find('.msax-Loading');
                }
                return Loader;
            })();
            Controls.Loader = Loader;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            Controls.showNavigatingAwayPopUp;
            Controls.navigateAway;
            "use strict";
            var OrderDetail = (function () {
                function OrderDetail(element) {
                    var _this = this;
                    this.tenderLines = [];
                    this.AddressView = $(document).find('.msax-EditAddress');
                    this.ShoppingCartView = $(document).find('.msax-ShoppingCart');
                    this.cart = Controls.CartData;
                    Controls.PaymentCardData = ko.observable(null);
                    this.paymentCard = Controls.PaymentCardData;
                    this.cardToken = Controls.CardToken;
                    this.ShippingAddress = ko.observable(new Controls.AddressClass(null));
                    this.PaymentAddress = ko.observable(new Controls.AddressClass(null));
                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().Items);
                    });

                    this.findParent = $(element).parent().attr("id");
                    var response = this.checkEditMode();

                    if (response == "True")
                        this.isEditableEnabled = true;
                    else
                        this.isEditableEnabled = false;

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.updateShoppingCart);
                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.updateShoppingCart);

                    Controls.CartBase.OnClearPageMode(this, this.ClearPageMode);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);

                    this.IsPageModeSubscribersCalled = false;
                    this.IsShoppingCartHasError = ko.observable(false);
                    if (Controls.ErrorCount != 0)
                        this.IsShoppingCartHasError(true);

                    this.orderConfirmPageMode = msaxValues.msax_PageMode == Controls.PageModeOptions.ConfirmView || msaxValues.msax_PageMode == Controls.PageModeOptions.ConfirmViewCompleted ? true : false;
                    Controls.showNavigatingAwayPopUp = false;
                    Controls.navigateAway = true;

                    this.thankYouPageMode = msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou ? true : false;
                    this.IsMinimumPurchase = false;
                }
                OrderDetail.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmView, this, this.ConfirmViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmViewCompleted, this, this.ConfirmViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ThankYou, this, this.ThankYouPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                OrderDetail.prototype.checkEditMode = function () {
                    if (!AFM.Utils.isNullOrUndefined(msaxValues.msax_IsEditable)) {
                        for (var i = 0; i < msaxValues.msax_IsEditable.length; i++) {
                            if (this.findParent.split('_').indexOf(msaxValues.msax_IsEditable[i].key) > -1)
                                return msaxValues.msax_IsEditable[i].value;
                        }
                    }
                    return false;
                };

                OrderDetail.prototype.updateShoppingCart = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        this.IsShoppingCartHasError(true);
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                    } else {
                        this.cart(data.ShoppingCart);
                        Controls.CartBase.showError(false);
                        if (msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou) {
                            var tempPhoneValue = data.ShoppingCart.BillingAddress.Phone;
                            if (!AFM.Utils.isNullOrEmpty(tempPhoneValue))
                                data.ShoppingCart.BillingAddress.Phone = AFM.Utils.SetPhoneFormat(tempPhoneValue);
                            tempPhoneValue = data.ShoppingCart.ShippingAddress.Phone;
                            if (!AFM.Utils.isNullOrEmpty(tempPhoneValue))
                                data.ShoppingCart.ShippingAddress.Phone = AFM.Utils.SetPhoneFormat(tempPhoneValue);
                            tempPhoneValue = data.ShoppingCart.ShippingAddress.Phone2;
                            if (!AFM.Utils.isNullOrEmpty(tempPhoneValue))
                                data.ShoppingCart.ShippingAddress.Phone2 = AFM.Utils.SetPhoneFormat(tempPhoneValue);
                            tempPhoneValue = data.ShoppingCart.ShippingAddress.Phone3;
                            if (!AFM.Utils.isNullOrEmpty(tempPhoneValue))
                                data.ShoppingCart.ShippingAddress.Phone3 = AFM.Utils.SetPhoneFormat(tempPhoneValue);
                            this.PaymentAddress(data.ShoppingCart.BillingAddress);
                            this.ShippingAddress(data.ShoppingCart.ShippingAddress);
                            var paymentString = data.ShoppingCart.TenderLines[0].PaymentCard.CardNumber;
                            data.ShoppingCart.TenderLines[0].PaymentCard.Last4Digits = data.ShoppingCart.TenderLines[0].PaymentCard.CardNumber.substr(paymentString.length - 4, paymentString.length);
                            this.paymentCard(data.ShoppingCart.TenderLines[0].PaymentCard);

                            if (!AFM.Utils.isNullOrUndefined(this.PaymentAddress().Email) && msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou)
                                $(document).trigger('SendPaymentEmail', this.PaymentAddress().Email);
                        }
                    }
                };

                OrderDetail.prototype.EditShippingClick = function () {
                    Controls.IsConfirmedit = true;
                    Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ShippingViewCompleted);
                };

                OrderDetail.prototype.EditBillingDetailClick = function () {
                    Controls.IsConfirmedit = true;
                    Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.BillingViewcompleted);
                };

                OrderDetail.prototype.EditPaymentTyepClick = function () {
                    var userpagemode = new Controls.UserPageMode(null);
                    userpagemode.PageMode = Controls.PageModeOptions.BillingView;
                    msaxValues.msax_LocalPageMode = Controls.PageMode.Billing;
                    Controls.AFMExtendedService.SetUserPageMode(userpagemode).done(function (data) {
                        Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.PaymentViewCompleted);
                    });
                };

                OrderDetail.prototype.ClearPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.AddressView.hide();
                };

                OrderDetail.prototype.ConfirmViewPageMode = function (event, data) {
                    this.getUserCartInfo();
                    this.AddressView.show();
                    this.ShoppingCartView.show();
                };

                OrderDetail.prototype.ConfirmViewCompletedPageMode = function (event, data) {
                    this.AddressView.show();
                    this.ShoppingCartView.show();
                };

                OrderDetail.prototype.ThankYouPageMode = function (event, data) {
                    this.AddressView.show();
                };

                OrderDetail.prototype.getUserCartInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.GetUserCartInfo().done(function (data) {
                        if (!AFM.Utils.isNullOrEmpty(data.ShippingAddress.Phone))
                            data.ShippingAddress.Phone = AFM.Utils.SetPhoneFormat(data.ShippingAddress.Phone);
                        if (!AFM.Utils.isNullOrEmpty(data.ShippingAddress.Phone2))
                            data.ShippingAddress.Phone2 = AFM.Utils.SetPhoneFormat(data.ShippingAddress.Phone2);
                        if (!AFM.Utils.isNullOrEmpty(data.ShippingAddress.Phone3))
                            data.ShippingAddress.Phone3 = AFM.Utils.SetPhoneFormat(data.ShippingAddress.Phone3);
                        if (!AFM.Utils.isNullOrEmpty(data.PaymentAddress.Phone))
                            data.PaymentAddress.Phone = AFM.Utils.SetPhoneFormat(data.PaymentAddress.Phone);
                        _this.ShippingAddress(data.ShippingAddress);
                        _this.PaymentAddress(data.PaymentAddress);
                        _this.getCardTokenData();
                    }).fail(function (errors) {
                    });
                };

                OrderDetail.prototype.getUserCartInfoForThankyouPage = function () {
                    var _this = this;
                    Controls.AFMExtendedService.GetUserCartInfo().done(function (data) {
                        _this.ShippingAddress(data.ShippingAddress);
                        _this.PaymentAddress(data.PaymentAddress);
                    }).fail(function (errors) {
                    });
                };

                OrderDetail.prototype.getCardTokenData = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    this.tenderLines = [];
                    if (!AFM.Utils.isNullOrEmpty(msaxValues.msax_TransactionId)) {
                        Controls.AFMExtendedService.GetCardTokenData(msaxValues.msax_TransactionId).done(function (data) {
                            if (AFM.Utils.isNullOrEmpty(data.Error)) {
                                var payment = new Controls.PaymentClass(null);
                                var minPurchaseAmount = 0;
                                payment.NameOnCard = data.Name;

                                payment.Last4Digits = data.Last4Digits;
                                payment.ExpirationYear = parseInt(data.ExpirationYear);
                                payment.ExpirationMonth = parseInt(data.ExpirationMonth);
                                payment.CardType = data.CardType;
                                payment.SynchronyPromoDesc = data.SynchronyPromoDesc;
                                payment.FinancingOptionId = data.FinancingOptionId;
                                payment.MinimumPurchase = data.SynchronyMinPurchase;
                                payment.RemoveCartDiscount = data.RemoveCartDiscount;
                                if (!AFM.Utils.isNullOrUndefined(payment.MinimumPurchase) && payment.MinimumPurchase > 0)
                                    minPurchaseAmount = payment.MinimumPurchase;

                                payment.PaymentAddress = _this.PaymentAddress();
                                _this.cardToken(data.CardToken);
                                Controls.CardToken = _this.cardToken;
                                _this.paymentCard(payment);
                                Controls.PaymentCardData = _this.paymentCard;
                                _this.tenderLines = [];
                                var tenderLine = new Controls.TenderDataLineClass(null);

                                tenderLine.PaymentCard = new Controls.PaymentClass(_this.paymentCard());

                                var tokenizedPaymentCard = new Controls.TokenizedPaymentCardClass(null);
                                tokenizedPaymentCard.CardToken = data.CardToken;
                                tokenizedPaymentCard.CardType = data.CardType;
                                tokenizedPaymentCard.ExpirationMonth = parseInt(data.ExpirationMonth);
                                tokenizedPaymentCard.ExpirationYear = parseInt(data.ExpirationYear);
                                tokenizedPaymentCard.MaskedCardNumber = data.Last4Digits;
                                tokenizedPaymentCard.NameOnCard = data.Name;
                                tokenizedPaymentCard.PaymentAddress = _this.PaymentAddress();
                                tokenizedPaymentCard.UniqueCardId = data.UniqueCardId;
                                tokenizedPaymentCard.SynchronyPromoDesc = data.SynchronyPromoDesc;
                                tokenizedPaymentCard.FinancingOptionId = data.FinancingOptionId;
                                tokenizedPaymentCard.MinimumPurchase = data.SynchronyMinPurchase;
                                tokenizedPaymentCard.RemoveCartDiscount = data.RemoveCartDiscount;
                                if (!AFM.Utils.isNullOrUndefined(tokenizedPaymentCard.MinimumPurchase) && tokenizedPaymentCard.MinimumPurchase > 0)
                                    minPurchaseAmount = tokenizedPaymentCard.MinimumPurchase;

                                if (!AFM.Utils.isNullOrUndefined(data.FinancingOptionId) && data.FinancingOptionId.trim().length > 0 && data.RemoveCartDiscount == true)
                                    Controls.showNavigatingAwayPopUp = true;
                                else
                                    Controls.showNavigatingAwayPopUp = false;

                                tenderLine.Amount = _this.cart().TotalAmount;
                                _this.tenderLines.push(tenderLine);
                                Controls.TenderLinesData = _this.tenderLines;
                                Controls.CartBase.UpdateFocusPageModeValue(Controls.PageModeOptions.ConfirmViewCompleted);
                                if (payment.CardType == Controls.Resources.String_1404 || tokenizedPaymentCard.CardType == Controls.Resources.String_1404) {
                                    msaxValues.msax_Synchronycart = true;
                                    if (payment.MinimumPurchase > 0) {
                                        msaxValues.msax_MinimumPurchaseSynchronyCart = true;
                                        Controls.errorMessage = Controls.Resources.String_1405;
                                        Controls.CartBase.showInfo(true);
                                    }
                                } else {
                                    msaxValues.msax_Synchronycart = false;
                                    msaxValues.msax_MinimumPurchaseSynchronyCart = false;
                                    Controls.CartBase.showInfo(false);
                                    Controls.CartBase.showError(false);
                                }
                                if (!AFM.Utils.isNullOrUndefined(data.FinancingOptionId) && data.FinancingOptionId.trim().length > 0) {
                                    _this.LoadInitialData();
                                    Controls.SynchronyMinPurchaseAmount(minPurchaseAmount);
                                } else
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                $(document).trigger('ShowPasswordAndTACInputs', "Success");
                            } else {
                                Controls.errorMessage = data.Error;
                                Controls.CartBase.showError(true);
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                $(document).trigger('ShowPasswordAndTACInputs', "Failure");
                            }
                        }).fail(function (errors) {
                            Controls.errorMessage = Controls.Resources.String_1113;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            $(document).trigger('ShowPasswordAndTACInputs', "Failure");
                        });
                    }
                };

                OrderDetail.prototype.LoadInitialData = function () {
                    Controls.ShoppingCartService.GetShoppingCart(Controls.ShoppingCartDataLevel.All, true).done(function (data) {
                        Controls.CartData(data.ShoppingCart);
                        if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                            Controls.errorMessage = data.Errors[0].ErrorMessage;
                            Controls.ErrorCount = data.Errors.length;
                            if (!AFM.Utils.isNullOrUndefined(data.ShoppingCart.ATPError) && (msaxValues.msax_PageMode == Controls.PageModeOptions.BillingView || msaxValues.msax_PageMode == Controls.PageModeOptions.BillingViewcompleted))
                                $(document).find('.msax - ErrorPanel').hide();
                            else
                                Controls.CartBase.showError(true);
                            $(document).find('.msax-SubmitOrder').hide();
                        } else {
                            $(document).find('.msax-SubmitOrder').show();
                            Controls.CartBase.showError(false);
                        }
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (error) {
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        if (!AFM.Utils.isNullOrEmpty(msaxValues.msax_ErrorPageUrl))
                            window.location.href = msaxValues.msax_ErrorPageUrl;
                    });
                };

                OrderDetail.prototype.LoadTempPaymentData = function () {
                    if (AFM.Utils.isNullOrUndefined(this.paymentCard())) {
                        var payment = new Controls.PaymentClass(null);
                        payment.NameOnCard = "Jane Doe";
                        payment.Last4Digits = "4566";
                        payment.CardNumber = "4111111111111111";
                        payment.ExpirationYear = 1;
                        payment.ExpirationMonth = 2016;
                        payment.CardType = "Visa";
                        payment.CCID = "024";
                        this.cardToken(45);
                        this.paymentCard(payment);
                    }
                    if (this.tenderLines.length == 0) {
                        this.tenderLines = [];
                        var tenderLine = new Controls.TenderDataLineClass(null);
                        tenderLine.PaymentCard = new Controls.PaymentClass(this.paymentCard());
                        tenderLine.Amount = this.cart().GrandTotal;
                        this.tenderLines.push(tenderLine);
                    }
                };
                return OrderDetail;
            })();
            Controls.OrderDetail = OrderDetail;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var OrderSummary = (function () {
                function OrderSummary(element) {
                    var _this = this;
                    this.cart = Controls.CartData;
                    this.pageElement = $(element);
                    this.pageElement.show();
                    this.OrderSummaryView = $(document).find('.msax-OrderSummary');
                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().Items);
                    });

                    this.estimateShippingLable = ko.observable(Controls.Resources.String_1106);
                    this.estimateHDLabel = ko.observable(Controls.Resources.String_1107);
                    this.estimateTotalLable = ko.observable(Controls.Resources.String_12);

                    this.showTax = ko.observable(false);

                    this.CheckforDiscountDisplay();

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.updateShoppingCart);
                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.updateShoppingCart);

                    Controls.CartBase.OnClearPageMode(this, this.ClearPageMode);

                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;

                    this.IsShoppingCartHasError = ko.observable(false);
                    if (Controls.ErrorCount != 0)
                        this.IsShoppingCartHasError(true);
                    this.LoadTax();

                    this.ShoppingCartPageMode = msaxValues.msax_PageMode == Controls.PageModeOptions.CartView ? true : false;
                }
                OrderSummary.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmViewCompleted, this, this.ConfirmViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmView, this, this.ConfirmViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.BillingView, this, this.BillingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.BillingViewcompleted, this, this.BillingViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingView, this, this.ShippingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingViewCompleted, this, this.ShippingViewCompletedPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ThankYou, this, this.ThankYouPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.CartView, this, this.CartViewPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                OrderSummary.prototype.updateShoppingCart = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        this.IsShoppingCartHasError(true);
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                        if (data.ShoppingCart != null)
                            this.cart(data.ShoppingCart);
                    } else {
                        this.cart(data.ShoppingCart);
                        Controls.CartBase.showError(false);
                        if (msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou) {
                            var orderSummaryData = new Controls.AFMOrderSummary(null);
                            if (!AFM.Utils.isNullOrUndefined(this.cart())) {
                                orderSummaryData.EstHomeDelivery = this.cart().EstHomeDelivery;
                                orderSummaryData.EstShipping = this.cart().EstShipping;
                                orderSummaryData.SubtotalWithCurrency = this.cart().SubtotalWithCurrency;
                                orderSummaryData.TaxAmountWithCurrency = this.cart().TaxAmountWithCurrency;
                                orderSummaryData.TotalAmountWithCurrency = this.cart().TotalAmountWithCurrency;
                            }
                            Controls.CartData.AFMOrderSummaryData = orderSummaryData;
                        }
                    }
                    this.LoadTax();
                };

                OrderSummary.prototype.LoadTax = function () {
                    if (!AFM.Utils.isNullOrUndefined(this.cart()) && this.cart().TaxAmountWithCurrency == "$0.00") {
                        if (window.location.hash.split('#').length > 1 && (window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.Billing || window.location.hash.split('#')[1].toLowerCase() == Controls.PageMode.Confirm))
                            this.showTax = ko.observable(true);
                        else
                            this.showTax = ko.observable(false);
                    } else
                        this.showTax = ko.observable(true);
                };

                OrderSummary.prototype.ConfirmViewPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    this.estimateShippingLable(Controls.Resources.String_1211);
                    this.estimateHDLabel(Controls.Resources.String_1215);
                    this.estimateTotalLable(Controls.Resources.String_5);
                    this.OrderSummaryView.show();
                };

                OrderSummary.prototype.ConfirmViewCompletedPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    this.estimateShippingLable(Controls.Resources.String_1212);
                    this.estimateHDLabel(Controls.Resources.String_1216);
                    this.estimateTotalLable(Controls.Resources.String_5);
                    this.OrderSummaryView.show();
                };

                OrderSummary.prototype.BillingViewPageMode = function (event, data) {
                    this.cart = Controls.CartData;

                    var orderSummaryData = new Controls.AFMOrderSummary(null);
                    if (!AFM.Utils.isNullOrUndefined(this.cart())) {
                        orderSummaryData.EstHomeDelivery = this.cart().EstHomeDelivery;
                        orderSummaryData.EstShipping = this.cart().EstShipping;
                        orderSummaryData.SubtotalWithCurrency = this.cart().SubtotalWithCurrency;
                        orderSummaryData.TaxAmountWithCurrency = this.cart().TaxAmountWithCurrency;
                        orderSummaryData.TotalAmountWithCurrency = this.cart().TotalAmountWithCurrency;
                    }
                    Controls.CartData.AFMOrderSummaryData = orderSummaryData;

                    this.estimateShippingLable(Controls.Resources.String_1106);
                    this.estimateHDLabel(Controls.Resources.String_1107);
                    this.estimateTotalLable(Controls.Resources.String_12);
                    this.OrderSummaryView.show();
                };

                OrderSummary.prototype.BillingViewCompletedPageMode = function (event, data) {
                    this.cart = Controls.CartData;

                    var orderSummaryData = new Controls.AFMOrderSummary(null);
                    if (!AFM.Utils.isNullOrUndefined(this.cart())) {
                        orderSummaryData.EstHomeDelivery = this.cart().EstHomeDelivery;
                        orderSummaryData.EstShipping = this.cart().EstShipping;
                        orderSummaryData.SubtotalWithCurrency = this.cart().SubtotalWithCurrency;
                        orderSummaryData.TaxAmountWithCurrency = this.cart().TaxAmountWithCurrency;
                        orderSummaryData.TotalAmountWithCurrency = this.cart().TotalAmountWithCurrency;
                    }
                    Controls.CartData.AFMOrderSummaryData = orderSummaryData;

                    this.estimateShippingLable(Controls.Resources.String_1106);
                    this.estimateHDLabel(Controls.Resources.String_1107);
                    this.estimateTotalLable(Controls.Resources.String_12);
                    this.OrderSummaryView.show();
                };
                OrderSummary.prototype.ShippingViewPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    this.estimateShippingLable(Controls.Resources.String_1106);
                    this.estimateHDLabel(Controls.Resources.String_1107);
                    this.estimateTotalLable(Controls.Resources.String_12);
                    this.OrderSummaryView.show();
                };

                OrderSummary.prototype.ShippingViewCompletedPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    this.estimateShippingLable(Controls.Resources.String_1106);
                    this.estimateHDLabel(Controls.Resources.String_1107);
                    this.estimateTotalLable(Controls.Resources.String_12);
                    this.OrderSummaryView.show();
                };
                OrderSummary.prototype.ThankYouPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    var orderSummaryData = new Controls.AFMOrderSummary(null);
                    orderSummaryData.EstHomeDelivery = this.cart().EstHomeDelivery;
                    orderSummaryData.EstShipping = this.cart().EstShipping;
                    orderSummaryData.SubtotalWithCurrency = this.cart().SubtotalWithCurrency;
                    orderSummaryData.TaxAmountWithCurrency = this.cart().TaxAmountWithCurrency;
                    orderSummaryData.TotalAmountWithCurrency = this.cart().TotalAmountWithCurrency;
                    Controls.CartData.AFMOrderSummaryData = orderSummaryData;
                    this.estimateShippingLable(Controls.Resources.String_1213);
                    this.estimateHDLabel(Controls.Resources.String_1217);
                    this.estimateTotalLable(Controls.Resources.String_5);
                    this.OrderSummaryView.show();
                };
                OrderSummary.prototype.CartViewPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    this.estimateShippingLable(Controls.Resources.String_1106);
                    this.estimateHDLabel(Controls.Resources.String_1107);
                    this.estimateTotalLable(Controls.Resources.String_12);
                    this.OrderSummaryView.show();
                };

                OrderSummary.prototype.ClearPageMode = function (event, data) {
                    this.cart = Controls.CartData;
                    this.OrderSummaryView.hide();
                };

                OrderSummary.prototype.CheckforDiscountDisplay = function () {
                    if (msaxValues.msax_ViewDiscount == "True")
                        this.isDiscountViewEnabled = true;
                    else
                        this.isDiscountViewEnabled = false;
                };
                return OrderSummary;
            })();
            Controls.OrderSummary = OrderSummary;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
$(document).ready(function () {
    $("div.close").hover(function () {
        $('span.ecs_tooltip').show();
    }, function () {
        $('span.ecs_tooltip').hide();
    });
});

var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";

            var PromotionCode = (function () {
                function PromotionCode(element) {
                    var _this = this;
                    this.cart = Controls.CartData;
                    if (this.cart() != null)
                        this.DiscountCodes = this.cart().DiscountCodes;
                    this.PromotionCodeTextBox = ko.observable(null);
                    this.PromotionCode = ko.observable(null);
                    this.PromotionCodeView = $(document).find('.msax-PromotionCode');
                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().Items);
                    });
                    this.isPromotionCodesEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().DiscountCodes);
                    });

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.updateShoppingCart);

                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;

                    this.popupStatus = false;
                }
                PromotionCode.prototype.ClearPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                };

                PromotionCode.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.CartView, this, this.CartViewPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                PromotionCode.prototype.CartViewPageMode = function (event, data) {
                    this.PromotionCodeView.show();
                };

                PromotionCode.prototype.updateShoppingCart = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                        if (data.ShoppingCart != null) {
                            this.cart(data.ShoppingCart);
                        }
                    } else {
                        this.cart(data.ShoppingCart);
                        Controls.errorPanel.hide();
                    }
                };

                PromotionCode.prototype.preventKeyPress = function (data, event) {
                    if (event.keyCode == 13 || event.keyCode == 27) {
                        event.preventDefault();
                        return false;
                    }
                    if (event.keyCode == 8 && !AFM.Utils.isNullOrUndefined(event.target.tagName) && event.target.tagName.toLowerCase() == "select") {
                        event.preventDefault();
                        return false;
                    }
                    return true;
                };

                PromotionCode.prototype.updatePromotionCodeTextBoxChanged = function (viewModel, valueAccesor) {
                    this.PromotionCode(valueAccesor.target.value);
                };

                PromotionCode.prototype.getPromotions = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText);
                    $(document).find('.msax-PromotionCodeTextBox').removeClass("msax-RequiredError");
                    Controls.ShoppingCartService.GetPromotions(false, Controls.ShoppingCartDataLevel.All).done(function (data) {
                        if (!AFM.Utils.isNullOrEmpty(_this.PromotionCode())) {
                            var tempshowPromoValidError = true;
                            for (var i = 0; i < data.ShoppingCart.DiscountCodes.length; i++) {
                                var tempdiscountDiscountcode = data.ShoppingCart.DiscountCodes[i];
                                if (tempdiscountDiscountcode.toLowerCase() == _this.PromotionCode().toLowerCase()) {
                                    tempshowPromoValidError = false;
                                }
                            }
                            if (tempshowPromoValidError) {
                                Controls.errorMessage = Controls.Resources.String_1164;

                                _this.showErrorPanel(true, Controls.errorMessage);
                                $(document).find('.msax-PromotionCodeTextBox').addClass("msax-RequiredError");
                            } else {
                                _this.showErrorPanel(false, Controls.errorMessage);
                            }
                        }
                        _this.PromotionCodeTextBox("");
                        _this.PromotionCode("");

                        $(document).find('.msax-ProceedtoCartButtons').show();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (errors) {
                        $(document).find('.msax-ProceedtoCartButtons').show();
                        Controls.errorMessage = Controls.Resources.String_177;
                        Controls.CartBase.showError(true);
                        _this.disablePopup();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                PromotionCode.prototype.applyPromotionCode = function (cart, valueAccesor) {
                    var _this = this;
                    $(document).find('.msax-PromotionCodeTextBox').removeClass("msax-RequiredError");
                    Controls.CartBase.showError(false);
                    if (!AFM.Utils.isNullOrUndefined(this.PromotionCode())) {
                        if (!AFM.Utils.isNullOrWhiteSpace(this.PromotionCode())) {
                            Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                            var promoCode = this.PromotionCode();
                            var discountCodeArryr = [];
                            $.each(this.cart().DiscountCodes, function (index, value) {
                                discountCodeArryr.push(value.toLowerCase());
                            });
                            if ($.inArray(promoCode.toLowerCase(), discountCodeArryr) > -1) {
                                Controls.errorMessage = Controls.Resources.String_1165;
                                this.showErrorPanel(true, Controls.errorMessage);
                                $(document).find('.msax-PromotionCodeTextBox').addClass("msax-RequiredError");
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                return;
                            }
                            Controls.AFMExtendedService.ValidatePromocode(this.PromotionCode()).done(function (data) {
                                if (data) {
                                    Controls.ShoppingCartService.AddOrRemovePromotion(false, promoCode, true, Controls.ShoppingCartDataLevel.All).done(function (data) {
                                        $(document).find('.msax-ProceedtoCartButtons').show();
                                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                        _this.getPromotions();
                                    }).fail(function (errors) {
                                        Controls.errorMessage = Controls.Resources.String_93;
                                        Controls.CartBase.showError(true);
                                        $(document).find('.msax-ProceedtoCartButtons').show();
                                        _this.disablePopup();
                                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                    });
                                } else {
                                    Controls.errorMessage = Controls.Resources.String_1302;
                                    _this.showErrorPanel(true, Controls.errorMessage);
                                    $(document).find('.msax-PromotionCodeTextBox').addClass("msax-RequiredError");

                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                }
                            }).fail(function (errors) {
                                $(document).find('.msax-ProceedtoCartButtons').show();
                                Controls.errorMessage = Controls.Resources.String_177;
                                Controls.CartBase.showError(true);
                                _this.disablePopup();
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            });
                        } else {
                            Controls.errorMessage = Controls.Resources.String_97;
                            this.showErrorPanel(true, Controls.errorMessage);
                            $(document).find('.msax-PromotionCodeTextBox').addClass("msax-RequiredError");
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        }
                    } else {
                        Controls.errorMessage = Controls.Resources.String_97;
                        this.showErrorPanel(true, Controls.errorMessage);
                        $(document).find('.msax-PromotionCodeTextBox').addClass("msax-RequiredError");
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }
                };

                PromotionCode.prototype.removePromotionCode = function (code, valueAccesor) {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    var srcElement = valueAccesor.target;

                    if (!AFM.Utils.isNullOrUndefined(code)) {
                        Controls.ShoppingCartService.AddOrRemovePromotion(false, code, false, Controls.ShoppingCartDataLevel.All).done(function (data) {
                            _this.PromotionCode("");
                            $(document).find('.msax-ProceedtoCartButtons').show();
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            _this.getPromotions();
                            _this.showErrorPanel(false, "");
                        }).fail(function (errors) {
                            $(document).find('.msax-ProceedtoCartButtons').show();
                            Controls.errorMessage = Controls.Resources.String_94;
                            Controls.CartBase.showError(true);
                            _this.disablePopup();
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    } else {
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        this.showErrorPanel(false, "");
                    }
                };

                PromotionCode.prototype.updatePromoCodeButton = function () {
                    if (this.popupStatus == false) {
                        var topopupwidth = $("#toPopup1").width() / 2;
                        $("#toPopup1").css({ "margin-left": "-" + topopupwidth + "px" });
                        $("#toPopup1").fadeIn(500);
                        $("#backgroundPopup").css("opacity", "0.7");
                        $("#backgroundPopup").fadeIn(100);
                        this.popupStatus = true;
                        this.showErrorPanel(false, "");
                        $(document).find('.msax-PromotionCodeTextBox').removeClass("msax-RequiredError");
                    }
                };

                PromotionCode.prototype.disablePopup = function () {
                    if (this.popupStatus == true) {
                        $("#toPopup1").fadeOut("normal");
                        $("#backgroundPopup").fadeOut("normal");
                        this.popupStatus = false;
                    }
                };

                PromotionCode.prototype.showErrorPanel = function (isError, error) {
                    if (isError) {
                        $(document).find('#lblError1').text(error);
                        $(document).find('#lblError1').show();
                    } else {
                        $(document).find('#lblError1').text("");
                        $(document).find('#lblError1').hide();
                    }
                };
                return PromotionCode;
            })();
            Controls.PromotionCode = PromotionCode;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";

            var RsaId = (function () {
                function RsaId(element) {
                    var _this = this;
                    this.cart = Controls.CartData;

                    this.RsaIdTextBox = ko.observable(null);
                    this.RSAID = ko.observable(null);
                    this.RsaEditMode = ko.observable(false);
                    this.rsaId = ko.observable(null);
                    if (this.cart() != null)
                        this.rsaId(this.cart().RsaId);
                    this.RsaIdView = $(document).find('.msax-RsaId');
                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().Items);
                    });
                    this.hasRsaId = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.rsaId()) && !AFM.Utils.isNullOrEmpty(_this.rsaId());
                    });

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.updateShoppingCart);

                    Controls.CartBase.OnClearPageMode(this, this.ClearPageMode);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;
                }
                RsaId.prototype.updateShoppingCart = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                    } else {
                        this.cart(data.ShoppingCart);
                        Controls.CartBase.showError(false);
                    }
                };

                RsaId.prototype.ClearPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.RsaIdView.hide();
                };

                RsaId.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.CartView, this, this.CartViewPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                RsaId.prototype.CartViewPageMode = function (event, data) {
                    this.RsaIdView.show();
                };

                RsaId.prototype.preventKeyPress = function (data, event) {
                    if (event.keyCode == 13 || event.keyCode == 27) {
                        event.preventDefault();
                        return false;
                    }
                    if (event.keyCode == 8 && !AFM.Utils.isNullOrUndefined(event.target.tagName) && event.target.tagName.toLowerCase() == "select") {
                        event.preventDefault();
                        return false;
                    }
                    return true;
                };

                RsaId.prototype.updateRsaIdTextBoxChanged = function (viewModel, valueAccesor) {
                    this.RSAID(valueAccesor.target.value);
                };

                RsaId.prototype.applyRsaId = function (cart, valueAccesor) {
                    var _this = this;
                    Controls.CartBase.showError(false);
                    $(document).find('.msax-RsaIdTextBox').removeClass("msax-RequiredError");
                    var RsaTextValue = $(document).find('.msax-RsaIdTextBox').val();
                    this.RSAID(RsaTextValue);
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    if (!AFM.Utils.isNullOrUndefined(this.RSAID()) && !AFM.Utils.isNullOrWhiteSpace(this.RSAID())) {
                        if (cart.RsaId.toLowerCase() == RsaTextValue.toLowerCase()) {
                            Controls.errorMessage = Controls.Resources.String_1313;
                            this.showErrorPanel(true, Controls.errorMessage);
                            $(document).find('.msax-RsaIdTextBox').addClass("msax-RequiredError");
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        } else {
                            Controls.AFMExtendedService.ValidateRsaId(this.RSAID(), false).done(function (data) {
                                if (data) {
                                    _this.rsaId(_this.RSAID());
                                    _this.cart().RsaId = _this.rsaId();
                                    _this.RsaEditMode(false);
                                    $(document).find('.msax-ProceedtoCartButtons').show();
                                    _this.showErrorPanel(false, "");
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                } else {
                                    Controls.errorMessage = Controls.Resources.String_1309;
                                    _this.showErrorPanel(true, Controls.errorMessage);
                                    $(document).find('.msax-RsaIdTextBox').addClass("msax-RequiredError");
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                }
                            }).fail(function (errors) {
                                Controls.errorMessage = Controls.Resources.String_1310;
                                Controls.CartBase.showError(true);
                                $(document).find('.msax-ProceedtoCartButtons').show();
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            });
                        }
                    } else {
                        Controls.errorMessage = Controls.Resources.String_1311;
                        this.showErrorPanel(true, Controls.errorMessage);
                        $(document).find('.msax-RsaIdTextBox').addClass("msax-RequiredError");
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }
                };

                RsaId.prototype.removeRsaId = function (cart, valueAccesor) {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    var srcElement = valueAccesor.target;
                    if (cart) {
                        Controls.AFMExtendedService.RemoveRsaIdFromCart(false).done(function (data) {
                            _this.RSAID("");
                            _this.rsaId(null);
                            _this.RsaEditMode(false);
                            _this.cart().RsaId = "";
                            $(document).find('.msax-ProceedtoCartButtons').show();
                            $(document).find('.msax-ApplyRsaIdBlock').show();
                            $(document).find('.msax-RsaCodeItem').hide();
                            _this.showErrorPanel(false, "");
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        }).fail(function (errors) {
                            $(document).find('.msax-ProceedtoCartButtons').show();
                            $(document).find('.msax-RsaIdBlock').hide();
                            Controls.errorMessage = Controls.Resources.String_1310;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    } else {
                        $(document).find('.msax-RsaIdBlock').hide();
                        this.showErrorPanel(false, "");
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }
                };

                RsaId.prototype.editRsaId = function (cart, valueAccesor) {
                    if (cart) {
                        this.rsaId(cart.RsaId);
                        cart.RsaId = this.rsaId();
                        this.RsaEditMode(true);
                        this.RSAID(this.rsaId);
                    }
                    this.showErrorPanel(false, "");
                };

                RsaId.prototype.showErrorPanel = function (isError, error) {
                    if (isError) {
                        $(document).find('.msax-divError2').text(error);
                        $(document).find('.msax-divError2').show();
                    } else {
                        $(document).find('.msax-divError2').text("");
                        $(document).find('.msax-divError2').hide();
                    }
                };
                return RsaId;
            })();
            Controls.RsaId = RsaId;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var Cart = (function () {
                function Cart(element) {
                    var _this = this;
                    this.mypageMode = "Confirm";
                    this.ShoppingCartView = $(document).find('.msax-ShoppingCart');
                    this._editRewardCardDialog = Controls.CartBase._cartView.find('.msax-EditRewardCard');
                    this.CheckoutDisable = $(document).find('.msax-CheckoutButton');
                    this.SubmitOrderDisable = $(document).find('.msax-SubmitOrder');
                    this.kitCartItemTypeValue = ko.observable(Controls.TransactionItemType.Kit);
                    this.LineItems = [];
                    this.orderNumber = ko.observable("");
                    this.supportDiscountCodes = ko.observable(AFM.Utils.isNullOrUndefined(msaxValues.msax_CartDiscountCodes) ? true : msaxValues.msax_CartDiscountCodes.toLowerCase() == "true");
                    this.supportLoyaltyReward = ko.observable(AFM.Utils.isNullOrUndefined(msaxValues.msax_CartLoyaltyReward) ? true : msaxValues.msax_CartLoyaltyReward.toLowerCase() == "true");
                    this.displayPromotionBanner = ko.observable(AFM.Utils.isNullOrUndefined(msaxValues.msax_CartDisplayPromotionBanner) ? true : msaxValues.msax_CartDisplayPromotionBanner.toLowerCase() == "true");
                    this.currentCartMode = false;

                    this.cart = Controls.CartData;

                    this.getZipCodeInfo();
                    this.AFMZipCode = ko.observable(null);

                    Controls.CartBase._cartView.keypress(function (event) {
                        if (event.keyCode == 13 || event.keyCode == 27) {
                            event.preventDefault();
                            return false;
                        }
                        if (event.keyCode == 8 && !AFM.Utils.isNullOrUndefined(event.target.tagName) && event.target.tagName.toLowerCase() == "select") {
                            event.preventDefault();
                            return false;
                        }
                        return true;
                    });

                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().Items);
                    });

                    this.isLoggedIn = ko.computed(function () {
                        if (msaxValues.msax_LoginMode == "True")
                            return true;
                        else
                            return false;
                    });

                    this.isConfimMode = ko.observable(false);
                    this.IsDisplayWishList = ko.computed(function () {
                        if (_this.isConfimMode()) {
                            if (msaxValues.msax_LoginMode == "True")
                                return true;
                            else
                                return false;
                        } else {
                            return true;
                        }
                    });

                    this.CheckSynchronyCart = ko.observable(false);
                    this.CheckSynchronyPaymentCart = ko.observable(false);

                    this.IsSynchronyCart = ko.computed(function () {
                        if (_this.isConfimMode()) {
                            if (msaxValues.msax_MinimumPurchaseSynchronyCart == true) {
                                _this.CheckSynchronyCart(true);
                            } else {
                                _this.CheckSynchronyCart(false);
                            }
                        }
                        return _this.CheckSynchronyCart();
                    });
                    this.IsSynchronyPaymentCart = ko.computed(function () {
                        if (_this.isConfimMode()) {
                            if (msaxValues.msax_Synchronycart == true) {
                                _this.CheckSynchronyPaymentCart(true);
                            } else {
                                _this.CheckSynchronyPaymentCart(false);
                            }
                        }
                        return _this.CheckSynchronyPaymentCart();
                    });

                    this.IsReadOnly = ko.computed(function () {
                        if (msaxValues.msax_ShoppingCartReadMode == "True")
                            return true;
                        else
                            return false;
                    });

                    this.isOrderConfirmationenabled = ko.computed(function () {
                        if (msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou)
                            return true;
                        else
                            return false;
                    });

                    this.removeItemConfirmDialog = $(element).find(".msax-RemoveItemConfrimPopup");
                    Controls.LoadingOverlay.CreateRemoveItemDialog(this.removeItemConfirmDialog, this, this.RemoveItemFromCart, this, this.RemoveItemCancel, Controls.Resources.String_1154, Controls.Resources.String_123);

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.UpdateShoppingCart);
                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.UpdateCheckoutCart);
                    Controls.CartBase.OnClearPageMode(this, this.ClearPageMode);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;

                    this.ShoppingCartPageMode = msaxValues.msax_PageMode == Controls.PageModeOptions.CartView ? true : false;
                }
                Cart.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.CartView, this, this.CartViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ThankYou, this, this.ThankYouPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmView, this, this.ConfirmViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ConfirmViewCompleted, this, this.ConfirmViewCompletedPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                Cart.prototype.ClearPageMode = function (event, data) {
                    Controls.CartBase.showError(false);
                    this.ShoppingCartView.hide();
                };

                Cart.prototype.CartViewPageMode = function (event, data) {
                    this.currentCartMode = false;
                    Controls.CartBase.showError(false);
                    this.cart = Controls.CartData;
                    this.ShoppingCartView.show();

                    this.isConfimMode(false);
                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                };

                Cart.prototype.ThankYouPageMode = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(this.cart())) {
                        Controls.CartBase.showError(false);
                        this.cart = Controls.CartData;
                        this.isOrderConfirmationenabled = true;

                        var cart = this.cart();

                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);

                        this.ShoppingCartView.show();
                    }
                };

                Cart.prototype.ConfirmViewPageMode = function (event, data) {
                    this.currentCartMode = true;
                    Controls.CartBase.showError(false);
                    this.cart = Controls.CartData;
                    this.isConfimMode(true);
                };

                Cart.prototype.ConfirmViewCompletedPageMode = function (event, data) {
                    this.currentCartMode = true;

                    this.cart = Controls.CartData;
                    this.isConfimMode(true);
                };

                Cart.prototype.addToWishList = function (item) {
                    $(document).trigger('AddtoWishlist', item.Listing);
                };

                Cart.prototype.getResx = function (key) {
                    return Controls.Resources[key];
                };

                Cart.prototype.quantityMinusClick = function (item) {
                    if (item.Quantity == 1) {
                        this.removeFromCartClick(item);
                    } else {
                        item.Quantity = item.Quantity - 1;
                        this.updateQuantity([item]);
                    }
                };

                Cart.prototype.quantityPlusClick = function (item) {
                    item.Quantity = item.Quantity + 1;
                    this.updateQuantity([item]);
                };

                Cart.prototype.quantityTextBoxChanged = function (item, valueAccesor) {
                    var srcElement = valueAccesor.target;
                    if (!AFM.Utils.isNullOrUndefined(srcElement) && srcElement.value != item.Quantity) {
                        var param = new RegExp("^(0?[0-9]{1,3}|[0-4][0-9][0-9][0-9]|5000)$");
                        if (param.test(srcElement.value)) {
                            item.Quantity = srcElement.value;
                            Controls.CartBase.showError(false);
                        } else {
                            this.DisableSubmitOrderProcessdButton();
                            Controls.errorMessage = Controls.Resources.String_1148;
                            Controls.CartBase.showError(true);
                        }
                        if (item.Quantity <= 0 || item.Quantity > 5000) {
                            Controls.errorMessage = Controls.Resources.String_1148;
                            this.DisableSubmitOrderProcessdButton();
                            Controls.CartBase.showError(true);
                            return;
                        }
                    }
                };
                Cart.prototype.checkItemQuantity = function () {
                    var cart = this.cart();
                    var flag = true;
                    for (var i = 0; i < cart.CartCount; i++) {
                        if (cart.Items[i].Quantity <= 0 || cart.Items[i].Quantity > 5000) {
                            Controls.errorMessage = Controls.Resources.String_1148;
                            this.DisableSubmitOrderProcessdButton();
                            Controls.CartBase.showError(true);
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        this.EnableSubmitOrderProcessdButton();
                    }
                    return flag;
                };

                Cart.prototype.quantityDropDownChanged = function (item, valueAccesor) {
                    var srcElement = valueAccesor.target;
                    if (!AFM.Utils.isNullOrUndefined(srcElement) && srcElement.value != item.Quantity) {
                        var param = new RegExp("^(0?[0-9]{1,3}|[0-4][0-9][0-9][0-9]|5000)$");
                        if (param.test(srcElement.value)) {
                            item.Quantity = srcElement.value;
                            Controls.CartBase.showError(false);
                        } else {
                            this.DisableSubmitOrderProcessdButton();
                            Controls.errorMessage = Controls.Resources.String_1148;
                            Controls.CartBase.showError(true);
                        }
                        if (item.Quantity <= 0 || item.Quantity > 99) {
                            Controls.errorMessage = Controls.Resources.String_1148;
                            Controls.CartBase.showError(true);
                            this.DisableSubmitOrderProcessdButton();
                        }
                    }
                };

                Cart.prototype.updateQuantityonClick = function (item) {
                    if (!(item.AFMMultipleQty > 1 || item.AFMLowestQty > 1)) {
                        var qtyTestBox = $(document).find('.' + item.LineId);
                        var param = new RegExp("^(0?[0-9]{1,3}|[0-4][0-9][0-9][0-9]|5000)$");
                        if (!param.test(qtyTestBox.val())) {
                            Controls.errorMessage = Controls.Resources.String_1148;
                            Controls.CartBase.showError(true);
                            return;
                        } else {
                            item.Quantity = qtyTestBox.val();
                        }
                    }

                    if (!this.checkItemQuantity()) {
                        return;
                    }

                    if (item.Quantity == 0) {
                        this.removeFromCartClick(item);
                    } else {
                        if (item.ItemType == Controls.TransactionItemType.Kit) {
                            for (var index in item.KitComponents) {
                                var originalKitQuantity = item.KitComponents[index].AFMKitItemQuantity;
                                item.KitComponents[index].Quantity = (item.KitComponents[index].Quantity / originalKitQuantity) * item.Quantity;
                                item.KitComponents[index].AFMKitItemQuantity = item.Quantity;
                            }
                            this.updateQuantity(item.KitComponents);
                        } else {
                            this.updateQuantity([item]);
                        }
                    }
                };

                Cart.prototype.editRewardCardOverlayClick = function () {
                    this.dialogOverlay = $('.ui-widget-overlay');
                    this.dialogOverlay.on('click', $.proxy(this.closeEditRewardCardDialog, this));
                };

                Cart.prototype.createEditRewardCardDialog = function () {
                    this._editRewardCardDialog.dialog({
                        modal: true,
                        autoOpen: false,
                        draggable: true,
                        resizable: false,
                        position: ['top', 100],
                        show: { effect: "fadeIn", duration: 500 },
                        hide: { effect: "fadeOut", duration: 500 },
                        width: 500
                    });

                    $('.ui-dialog').addClass('msax-Control');
                };

                Cart.prototype.showEditRewardCardDialog = function () {
                    this._editRewardCardDialog.dialog('open');
                    this.editRewardCardOverlayClick();
                };

                Cart.prototype.closeEditRewardCardDialog = function () {
                    this._editRewardCardDialog.dialog('close');
                };

                Cart.prototype.UpdateShoppingCart = function (event, data) {
                    this.UpdateShoppingCartData(data);
                };

                Cart.prototype.UpdateCheckoutCart = function (event, data) {
                    this.UpdateShoppingCartData(data);
                };
                Cart.prototype.UpdateShoppingCartData = function (data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                        $(document).find('.msax-SubmitOrder').hide();
                        if (data.ShoppingCart != null) {
                            this.cart(data.ShoppingCart);
                        }
                    } else {
                        $(document).find('.msax-SubmitOrder').show();
                        this.cart(data.ShoppingCart);
                        if (msaxValues.msax_PageMode == Controls.PageModeOptions.ThankYou) {
                            if (!AFM.Utils.isNullOrUndefined(data.ShoppingCart.SalesOrderNumber))
                                Controls.CartBase.CreateDDO(data.ShoppingCart.SalesOrderNumber);
                        }

                        if (msaxValues.msax_MinimumPurchaseSynchronyCart == true) {
                            Controls.errorMessage = Controls.Resources.String_1405;
                            Controls.CartBase.showInfo(true);

                            this.CheckSynchronyCart(true);
                        } else {
                            this.CheckSynchronyCart(false);
                            Controls.CartBase.showInfo(false);
                        }

                        if (msaxValues.msax_Synchronycart == true) {
                            this.CheckSynchronyPaymentCart(true);
                        } else {
                            this.CheckSynchronyPaymentCart(false);
                        }

                        Controls.CartBase.showError(false);
                    }
                };

                Cart.prototype.DisableSubmitOrderProcessdButton = function () {
                    this.SubmitOrderDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.SubmitOrderDisable.addClass("disableButton");
                    this.CheckoutDisable.attr('disabled', 'disabled').css('mouse', 'pointer');
                    this.CheckoutDisable.addClass("disableButton");
                };

                Cart.prototype.EnableSubmitOrderProcessdButton = function () {
                    this.SubmitOrderDisable.removeAttr('disabled').css('mouse', 'cursor');
                    this.SubmitOrderDisable.removeClass("disableButton");
                    this.CheckoutDisable.removeAttr('disabled').css('mouse', 'cursor');
                    this.CheckoutDisable.removeClass("disableButton");
                };

                Cart.prototype.getShoppingCart = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText);

                    Controls.ShoppingCartService.GetShoppingCart(Controls.ShoppingCartDataLevel.All, this.currentCartMode).done(function (data) {
                        _this.createEditRewardCardDialog();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_63;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                Cart.prototype.getPromotions = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText);

                    Controls.ShoppingCartService.GetPromotions(this.currentCartMode, Controls.ShoppingCartDataLevel.All).done(function (data) {
                        _this.createEditRewardCardDialog();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_177;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                Cart.prototype.removeFromCartClick = function (item) {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    var lineIds = [];
                    if (item.ItemType == Controls.TransactionItemType.Kit) {
                        for (var component in item.KitComponents) {
                            lineIds.push(item.KitComponents[component].LineId);
                        }
                        Controls.ShoppingCartService.RemoveKitFromCart(this.currentCartMode, lineIds, Controls.ShoppingCartDataLevel.All).done(function (data) {
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);

                            if (_this.displayPromotionBanner()) {
                                _this.getPromotions();
                            }
                            if (!AFM.Utils.isNullOrUndefined(data.ShoppingCart) && data.ShoppingCart.TotalAmount < Controls.SynchronyMinPurchaseAmount() && _this.IsSynchronyCart() == true) {
                                Controls.errorMessage = Controls.Resources.String_1406;
                                Controls.CartBase.showError(true);
                                $(document).find('.msax-SubmitOrder').hide();
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            }
                        }).fail(function (errors) {
                            Controls.errorMessage = Controls.Resources.String_64;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    } else {
                        Controls.ShoppingCartService.RemoveFromCart(this.currentCartMode, item.LineId, Controls.ShoppingCartDataLevel.All).done(function (data) {
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);

                            if (_this.displayPromotionBanner()) {
                                _this.getPromotions();
                            }
                            if (!AFM.Utils.isNullOrUndefined(data.ShoppingCart) && data.ShoppingCart.TotalAmount < Controls.SynchronyMinPurchaseAmount() && _this.IsSynchronyCart() == true) {
                                Controls.errorMessage = Controls.Resources.String_1406;
                                Controls.CartBase.showError(true);
                                $(document).find('.msax-SubmitOrder').hide();
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                            }
                        }).fail(function (errors) {
                            Controls.errorMessage = Controls.Resources.String_64;
                            Controls.CartBase.showError(true);
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    }
                    this.itemtobeRemove = null;
                };
                Cart.prototype.RemoveItemCancel = function () {
                    this.itemtobeRemove = null;
                    Controls.LoadingOverlay.closeRemoveItemDialog(this.removeItemConfirmDialog);
                };

                Cart.prototype.RemoveItemFromCart = function () {
                    Controls.LoadingOverlay.closeRemoveItemDialog(this.removeItemConfirmDialog);
                    var item = this.itemtobeRemove;
                    if (AFM.Utils.isNullOrUndefined(item))
                        return;
                };

                Cart.prototype.updateQuantity = function (items) {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    this.EnableSubmitOrderProcessdButton();
                    Controls.ShoppingCartService.UpdateQuantity(this.currentCartMode, items, Controls.ShoppingCartDataLevel.All).done(function (data) {
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);

                        if (_this.displayPromotionBanner()) {
                            _this.getPromotions();
                        }
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_65;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                Cart.prototype.updateLoyaltyCardId = function () {
                    var _this = this;
                    Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                    var loyaltyCardId = this._editRewardCardDialog.find('#RewardCardTextBox').val();

                    if (!AFM.Utils.isNullOrWhiteSpace(loyaltyCardId)) {
                        Controls.LoyaltyService.UpdateLoyaltyCardId(false, loyaltyCardId, Controls.ShoppingCartDataLevel.All).done(function (data) {
                            _this.closeEditRewardCardDialog();
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);

                            if (_this.displayPromotionBanner()) {
                                _this.getPromotions();
                            }
                        }).fail(function (errors) {
                            Controls.errorMessage = Controls.Resources.String_164;
                            Controls.CartBase.showError(true);
                            _this.closeEditRewardCardDialog();
                            Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                        });
                    }
                };

                Cart.prototype.updateZipCodeInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.SetZipCode(this.AFMZipCode(), this.currentCartMode).done(function (data) {
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);

                        if (_this.displayPromotionBanner()) {
                            _this.getPromotions();
                        }
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_1113;
                        Controls.CartBase.showError(true);
                        _this.closeEditRewardCardDialog();
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                Cart.prototype.getZipCodeInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.GetZipCode().done(function (data) {
                        _this.AFMZipCode(data.AFMZipCode);
                    });
                    ;
                };

                Cart.prototype.continueShoppingClick = function () {
                    if (!AFM.Utils.isNullOrWhiteSpace(msaxValues.msax_ContinueShoppingUrl)) {
                        window.location.href = msaxValues.msax_ContinueShoppingUrl;
                    } else {
                    }
                };

                Cart.prototype.signInClick = function () {
                    if (!AFM.Utils.isNullOrWhiteSpace(msaxValues.msax_SigInUrl)) {
                        window.location.href = msaxValues.msax_SigInUrl;
                    } else {
                    }
                };
                return Cart;
            })();
            Controls.Cart = Cart;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
$(document).ready(function () {
    $("div.close").hover(function () {
        $('span.ecs_tooltip').show();
    }, function () {
        $('span.ecs_tooltip').hide();
    });
});
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            "use strict";
            var ZipCode = (function () {
                function ZipCode(element) {
                    var _this = this;
                    this.cart = Controls.CartData;
                    this.currentCartMode = false;

                    this.getZipCodeInfo();
                    this.AFMZipCode = ko.observable('');
                    if (!AFM.Utils.isNullOrEmpty(Controls.AFMZipCodeData()))
                        this.AFMZipCode(Controls.AFMZipCodeData());
                    this.ZipCodeValue = ko.observable('');
                    this.popupStatus = false;

                    Controls.CartBase._cartView.keypress(function (event) {
                        if (event.keyCode == 13 || event.keyCode == 27) {
                            event.preventDefault();
                            return false;
                        }
                        if (event.keyCode == 8 && !AFM.Utils.isNullOrUndefined(event.target.tagName) && event.target.tagName.toLowerCase() == "select") {
                            event.preventDefault();
                            return false;
                        }
                        return true;
                    });

                    this.isShoppingCartEnabled = ko.computed(function () {
                        return !AFM.Utils.isNullOrUndefined(_this.cart()) && AFM.Utils.hasElements(_this.cart().Items);
                    });

                    this.ZipCodeValue.subscribe(function (newValue) {
                        if (!AFM.Utils.isNullOrUndefined(newValue))
                            newValue = newValue.replace(/[^0-9 ]/gi, '');
                        if (_this.ZipCodeValue() != newValue)
                            _this.ZipCodeValue(newValue);
                    }, this);

                    Controls.ShoppingCartService.OnUpdateShoppingCart(this, this.UpdateShoppingCart);
                    Controls.ShoppingCartService.OnUpdateCheckoutCart(this, this.UpdateShoppingCart);
                    Controls.CartBase.OnPageModeSubscribers(this, this.PageModeSubscribers);
                    this.IsPageModeSubscribersCalled = false;
                }
                ZipCode.prototype.PageModeSubscribers = function (event, data) {
                    if (!this.IsPageModeSubscribersCalled) {
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.CartView, this, this.CartViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingView, this, this.ShippingViewPageMode);
                        Controls.CartBase.OnUpdateFocusPageMode(Controls.PageModeOptions.ShippingViewCompleted, this, this.ShippingViewCompletedPageMode);
                        this.IsPageModeSubscribersCalled = true;
                    }
                };

                ZipCode.prototype.CartViewPageMode = function (event, data) {
                    this.currentCartMode = false;
                };

                ZipCode.prototype.ShippingViewPageMode = function (event, data) {
                    this.currentCartMode = true;
                };

                ZipCode.prototype.ShippingViewCompletedPageMode = function (event, data) {
                    this.currentCartMode = true;
                };
                ZipCode.prototype.UpdateShoppingCart = function (event, data) {
                    if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                        Controls.errorMessage = data.Errors[0].ErrorMessage;
                        Controls.CartBase.showError(true);
                        if (data.ShoppingCart != null) {
                            this.cart(data.ShoppingCart);
                        }
                    } else {
                        this.cart(data.ShoppingCart);
                        Controls.errorPanel.hide();
                    }
                };

                ZipCode.prototype.updateZipCodeInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.ValidateZipcode(Controls.Resources.String_1152, this.ZipCodeValue()).done(function (data) {
                        if (data) {
                            Controls.LoadingOverlay.ShowLoadingDialog(Controls.CartBase._loadingDialog, Controls.CartBase._loadingText, Controls.Resources.String_179);
                            if (_this.ZipCodeValue() != Controls.AFMZipCodeData()) {
                                Controls.AFMExtendedService.SetZipCode(_this.ZipCodeValue(), _this.currentCartMode).done(function (data) {
                                    _this.AFMZipCode(_this.ZipCodeValue());
                                    Controls.AFMZipCodeData(_this.AFMZipCode());
                                    $(document).trigger('DeleteOnZipcodeCookieUpdate');
                                    _this.disablePopup();

                                    Controls.ShoppingCartService.GetShoppingCart(Controls.ShoppingCartDataLevel.All, false).done(function (data) {
                                        _this.showErrorPane(false);
                                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                        _this.disablePopup();
                                        if (!AFM.Utils.isNullOrUndefined(data.Errors) && data.Errors.length > 0) {
                                            Controls.errorMessage = data.Errors[0].ErrorMessage;
                                            Controls.CartBase.showError(true);
                                        } else {
                                            Controls.errorMessage = Controls.Resources.String_1173;
                                            Controls.CartBase.showInfo(true);
                                        }
                                    }).fail(function (errors) {
                                        Controls.errorMessage = Controls.Resources.String_63;
                                        Controls.CartBase.showError(true);
                                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                    });
                                }).fail(function (errors) {
                                    Controls.errorMessage = Controls.Resources.String_1113;
                                    Controls.CartBase.showError(true);
                                    Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                });
                            } else {
                                Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                                _this.disablePopup();
                            }
                        } else {
                            _this.showErrorPane(true);
                        }
                    }).fail(function (errors) {
                        Controls.errorMessage = Controls.Resources.String_63;
                        Controls.CartBase.showError(true);
                        Controls.LoadingOverlay.CloseLoadingDialog(Controls.CartBase._loadingDialog);
                    });
                };

                ZipCode.prototype.getZipCodeInfo = function () {
                    var _this = this;
                    Controls.AFMExtendedService.GetZipCode().done(function (data) {
                        _this.AFMZipCode(data.AFMZipCode);
                        Controls.AFMZipCodeData(_this.AFMZipCode());
                        _this.ZipCodeValue(_this.AFMZipCode());
                    });
                    ;
                };

                ZipCode.prototype.updateZipCodeButton = function () {
                    if (this.popupStatus == false) {
                        this.ZipCodeValue(this.AFMZipCode());
                        var topopupwidth = $("#toPopup").width() / 2;
                        $("#toPopup").css({ "margin-left": "-" + topopupwidth + "px" });
                        $("#toPopup").fadeIn(500);
                        $("#backgroundPopup").css("opacity", "0.7");
                        $("#backgroundPopup").fadeIn(100);
                        this.popupStatus = true;
                        this.showErrorPane(false);
                    }
                };

                ZipCode.prototype.updateZipCodeonChange = function () {
                    this.updateZipCodeInfo();
                };

                ZipCode.prototype.disablePopup = function () {
                    if (this.popupStatus == true) {
                        $("#toPopup").fadeOut("normal");
                        $("#backgroundPopup").fadeOut("normal");
                        this.popupStatus = false;
                    }
                };

                ZipCode.prototype.showErrorPane = function (isError) {
                    if (isError) {
                        Controls.errorMessage = Controls.Resources.String_1150;
                        $(document).find('#lblError').text(Controls.errorMessage);
                        $(document).find('#divError').removeClass('msax-DisplayNone');
                        $(document).find('#divError').addClass("msax-Error");
                    } else {
                        $(document).find('#lblError').text("");
                        $(document).find('#divError').addClass('msax-DisplayNone');
                        $(document).find('#divError').removeClass("msax-Error");
                    }
                };
                return ZipCode;
            })();
            Controls.ZipCode = ZipCode;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            Controls.ResourceStrings["en-us"] = {
                String_1: "Shopping cart",
                String_2: "Item",
                String_3: "Item Price",
                String_4: "QTY",
                String_5: "Total",
                String_6: "Remove",
                String_7: "You Save",
                String_8: "Update quantity",
                String_9: "Subtotal",
                String_10: "Subtotal:",
                String_11: "Shipping and handling:",
                String_12: "Estimated Total:",
                String_13: "Total savings:",
                String_14: "CONTINUE",
                String_15: "There are no items in your cart.",
                String_16: "Delivery information",
                String_17: "Delivery preference:",
                String_18: "Shipping Address",
                String_19: "First Name",
                String_1097: "Last Name",
                String_20: "Country/region",
                String_21: "United States",
                String_22: "Address",
                String_23: "City",
                String_24: "State/province",
                String_25: "ZIP/postal code",
                String_26: "Shipping Method",
                String_27: "Get shipping options",
                String_28: "GO BACK",
                String_29: "Name",
                String_30: "Billing information",
                String_31: "Contact information",
                String_32: "Email address",
                String_33: "Confirm email address",
                String_34: "Payment method",
                String_35: "Card number",
                String_36: "Card type",
                String_37: "Expiration month",
                String_38: "Expiration year",
                String_39: "CCID",
                String_40: "What is this?",
                String_41: "Payment amount",
                String_42: "Billing Address",
                String_43: "Same as shipping address",
                String_44: "Address2",
                String_45: "Review and confirm",
                String_46: "Order information",
                String_47: "Edit",
                String_48: "Credit card",
                String_49: "Proceed to Checkout",
                String_50: "Apply Promo Code",
                String_51: "Tax:",
                String_52: "Submit order",
                String_53: "Thank you for your order",
                String_54: "Your order confirmation number is ",
                String_55: "Street",
                String_56: "State",
                String_57: "Zipcode",
                String_58: "Email",
                String_59: "Payment",
                String_60: "CardNumber",
                String_61: "Please select shipping method",
                String_62: "The confirm email address must match the email address.",
                String_63: "Sorry, something went wrong. The shopping cart information couldn't be retrieved. Please refresh the page and try again.",
                String_64: "Sorry, something went wrong. The product was not removed from the cart successfully. Please refresh the page and try again.",
                String_65: "Sorry, something went wrong. The product quantity couldn't be updated. Please refresh the page and try again.",
                String_66: "Sorry, something went wrong. Delivery methods could not be retrieved. Please refresh the page and try again.",
                String_67: "Sorry, something went wrong. The shipping information was not stored successfully. Please refresh the page and try again.",
                String_68: "Sorry, something went wrong. The payment card type information was not retrieved successfully. Please refresh the page and try again.",
                String_69: "Sorry, something went wrong. The order submission was not successful. Please refresh the page and try again.",
                String_70: "Invalid parameter",
                String_71: "validatorType attribute is not provided for validator binding.",
                String_72: "Use text characters only. Numbers, spaces, and special characters are not allowed.",
                String_73: "Use text characters only. Numbers, spaces, and special characters are not allowed.",
                String_74: "The quantity field cannot be empty",
                String_75: "Select delivery method.",
                String_76: "The email address is invalid.",
                String_77: "Please enter the name.",
                String_78: "The street number you entered may not be accurate. Please make corrections if needed, or use the address as entered.",
                String_79: "Please enter your {addresstype} address.",
                String_80: "Please enter your {addresstype} city.",
                String_81: "Please enter your {addresstype} zip/postal code.",
                String_82: "Please enter your {addresstype} state.",
                String_83: "Please enter the country.",
                String_84: "Please specify a payment card name.",
                String_85: "Please enter a valid card number.",
                String_86: "Please enter a valid CCID.",
                String_87: "Please specify a valid amount.",
                String_88: "{0} PRODUCT(S)",
                String_89: "Included",
                String_90: "Color: {0}",
                String_91: "Size: {0}",
                String_92: "Style: {0}",
                String_93: "Sorry, something went wrong. The promotion code could not be added successfully. Please refresh the page and try again.",
                String_94: "Sorry, something went wrong. The promotion code could not be removed successfully. Please refresh the page and try again.",
                String_95: "Apply",
                String_96: "Promotion Codes",
                String_97: "Please enter a promotion code",
                String_98: "Sorry, something went wrong. The channel configuration could not be retrieved successfully. Please refresh the page and try again.",
                String_99: "Ship items",
                String_100: "",
                String_101: "Select delivery options by item",
                String_102: "Find a store",
                String_103: "miles",
                String_104: "Available stores",
                String_105: "Store",
                String_106: "Distance",
                String_107: "Products are not available for pick up in the stores around the location you searched. Please update your delivery preferences and try again.",
                String_108: "Sorry, something went wrong. An error occurred while trying to get stores. Please refresh the page and try again.",
                String_109: "Sorry, your address could not be validated. Please re-enter a valid address.",
                String_110: "Sorry, something went wrong. An error has occured while looking up the address you provided. Please refresh the page and try again.",
                String_111: "Products are not available in this store",
                String_112: "Product availability:",
                String_113: "Products are not available in the selected store, Please select a different store",
                String_114: "Please select a store for pick up",
                String_115: "Store address",
                String_116: "Send to me",
                String_117: "Optional note",
                String_118: "Please enter email address for gift card delivery",
                String_119: "Sorry, something went wrong. An error occurred while trying to get the email address. Please enter the email address in the text box below",
                String_120: "Enter the shipping address and then click get shipping options to view the shipping options that are available for your area.",
                String_121: "Delivery method",
                String_122: "Select your delivery preference",
                String_123: "Cancel",
                String_124: "Done",
                String_125: "for product: {0}",
                String_126: "Please select delivery preference for product {0}",
                String_127: "Add credit card",
                String_128: "Gift card",
                String_129: "Add gift card",
                String_130: "Loyalty card",
                String_131: "Add loyalty card",
                String_132: "Payment information",
                String_133: "Payment total:",
                String_134: "Order total:",
                String_135: "Gift card does not exist",
                String_136: "Gift card balance",
                String_137: "Card details",
                String_138: "Sorry, something went wrong. An error occurred while trying to get payment methods supported by the store. Please refresh the page and try again.",
                String_139: "Please select payment method",
                String_140: "The expiration date is not valid. Please select valid expiration month and year and then try again",
                String_141: "Please enter a valid gift card number",
                String_142: "Get gift card balance",
                String_143: "Apply full amount",
                String_144: "Please enter a gift card number",
                String_145: "Sorry, something went wrong. An error occurred while trying to get gift card balance. Please refresh the page and try again.",
                String_146: "Gift card payment amount cannot be zero",
                String_147: "Gift card payment amount is more than order total",
                String_148: "Gift card does not have sufficient balance",
                String_149: "Payment amount is different from the order total",
                String_150: "Sorry, something went wrong. An error occurred while trying to get loyalty card information. Please refresh the page and try again.",
                String_151: "Please enter a valid loyalty card number",
                String_152: "Loyalty card payment amount cannot be zero",
                String_153: "Loyalty card payment amount is more than order total",
                String_154: "The loyalty card is blocked",
                String_155: "The loyalty card is not allowed for payment",
                String_156: "The loyalty payment amount exceeds what is allowed for this loyalty card in this transaction",
                String_157: "The loyalty card number does not exist",
                String_158: "Please select delivery preference",
                String_159: "Please select a delivery preference...",
                String_160: "Sorry, something went wrong. An error occurred while trying to get delivery methods information. Please refresh the page and try again.",
                String_161: "Select address...",
                String_162: "You have not added loyalty card number to your order",
                String_163: "Enter a reward card for the current order. You can include only one reward card per order",
                String_164: "Sorry, something went wrong. An error occurred while trying to update reward card id in cart. Please refresh the page and try again.",
                String_165: "Sorry, something went wrong. An error occurred while retrieving the country region information. Please refresh the page and try again.",
                String_166: "TBD",
                String_167: "Mini Cart",
                String_168: "Ordering FAQ",
                String_169: "Return policy",
                String_170: "Store locator tool",
                String_171: "Continue shopping",
                String_172: "Cart Order Total",
                String_173: "View full cart contents",
                String_174: "Quantity:",
                String_175: "Added to your cart:",
                String_176: "Loading ...",
                String_177: "Sorry, something went wrong. The cart's promotion information couldn't be retrieved. Please refresh the page and try again.",
                String_178: "Delivery method",
                String_179: "Updating shopping cart ...",
                String_180: "Submitting order ...",
                String_181: "Discount code",
                String_182: "Add coupon code",
                String_183: "Enter a discount code",
                String_184: "Please enter a valid discount code",
                String_185: "Sorry, something went wrong. An error occurred while retrieving the state/province information. Please refresh the page and try again.",
                String_1098: "Shipping",
                String_1099: "Shipping:",
                String_1101: "Sale price and shipping are based on shipping to ",
                String_1102: "zip code",
                String_1103: "(Update delivery zip code)",
                String_1104: "Continue shopping",
                String_1105: "Move to Wish List",
                String_1106: "Est. Shipping:",
                String_1107: "Est. Home Delivery:",
                String_1108: "Fulfilled By : ",
                String_1109: "On Sale",
                String_1110: "Update",
                String_1111: "Sorry, your address could not be validated. Please re-enter a valid address.",
                String_1112: "Zipcode can be of maximum 5 numbers",
                String_1113: "Error processing payment authorization, Please click 'Go back' button and re-enter payment details",
                String_1114: "Error Updating ZipCode. Please try again",
                String_1115: "Go back",
                String_1116: "Opt-in to Deals & Offers",
                String_1117: "USE THIS ADDRESS",
                String_1118: "Enter Shipping Address",
                String_1119: "Choose a Shipping Address",
                String_1120: "Contact Information (for shipping & delivery scheduling purposes)",
                String_1121: "Agree to receive text survey about your purchase",
                String_1122: "Country",
                String_1123: "Order Submission in process... please wait...",
                String_1124: "Address 2: (Optional)",
                String_1125: "Phone Number:",
                String_1126: "Alternate Number (Optional)",
                String_1127: "Contact Information (for shipping and delivery scheduling purposes)",
                String_1128: "Tel : ",
                String_1129: "Email : ",
                String_1130: "Alt Email : ",
                String_1131: "Alt : ",
                String_1132: "Name on Card : ",
                String_1133: "Commencing your cart to checkout...",
                String_1134: "No Payment Card Information provided",
                String_1135: "No Shipping charges applied",
                String_1136: "Alternate Email (Optional)",
                String_1137: "Or ",
                String_1138: "Qty: ",
                String_1139: "Billing",
                String_1140: "Confirm Your Order",
                String_1141: "You applied promo code : ",
                String_1142: "Confirmation #",
                String_1143: "Agree to receive a text survey on your purchase",
                String_1144: "I Agree with the Terms and Conditions",
                String_1145: " Please Remove Item having Zero price",
                String_1146: "Shipping:",
                String_1147: "Home Delivery:",
                String_1148: "Please enter a positive quantity.",
                String_1149: "Please accept Terms & Conditions to complete your order",
                String_1150: "The Delivery Zip Code Entered is not valid, please enter a new Delivery Zip Code",
                String_1151: "Sorry, something went wrong. Address Validation is not successful. Please refresh the page and try again.",
                String_1152: "USA",
                String_1153: "Update Delivery Zip Code:",
                String_1154: "Are you sure you want to remove this product from the shopping cart?",
                String_1155: "Remove from Cart",
                String_1156: "Your Shopping Cart Is Empty",
                String_1157: "(Required)",
                String_1158: "Verify Your Address",
                String_1159: "We checked your address with the U.S. Postal service and found some differences. Please click cancel to edit the address you entered or click 'Use This Address' button to use the suggested address.",
                String_1160: "Set of ",
                String_1161: "Tax could not be calculated.Please try again after sometime",
                String_1162: "Your shopping cart is currently empty. Please ",
                String_1163: " to retrive any items placed in your cart from a previous visit or continue shopping.",
                String_1164: "Promotion Code is not applied to any item in cart.",
                String_1165: "Promotion Code is already applied.",
                String_1166: "Sorry, at this time, we cannot ship to p.o. box. Please enter your street address",
                String_1167: "poerror",
                String_1168: "+1",
                String_1169: "Please enter 10 digit number",
                String_1170: "Address First Name or Last Name can have only alphabets.",
                String_1171: "Free Shipping",
                String_1172: "Free Home Delivery",
                String_1173: "You have changed the delivery zip-code, price(s) in your cart may have changed.",
                String_1174: "You have entered a new delivery address, price(s) in your cart may have changed. Please confirm your order.",
                String_1175: "Phone Number:",
                String_1176: "Phone Number:",
                String_1177: "Phone Number:",
                String_1178: "Phone Number:",
                String_1179: "Tel : ",
                String_1180: "Tel : ",
                String_1181: "Tel : ",
                String_1182: "Alternate Number (Highly Recommended)",
                String_1183: "Alternate Number (Optional)",
                String_1184: "Contact Information (for shipping and delivery scheduling purposes)",
                String_1185: "First Name",
                String_1186: "First Name",
                String_1187: "Last Name",
                String_1188: "Last Name",
                String_1189: "Address",
                String_1190: "Address 2: (Optional)",
                String_1191: "City",
                String_1192: "State/province",
                String_1193: "ZIP/postal code",
                String_1194: "Country/region",
                String_1195: "Email address",
                String_1196: "Confirm email address",
                String_1197: "GO BACK",
                String_1198: "GO BACK",
                String_1199: "Billing Address",
                String_1200: "CONTINUE",
                String_1201: "Continue shopping",
                String_1202: "Continue shopping",
                String_1203: "Proceed to Checkout",
                String_1204: "Proceed to Checkout",
                String_1205: "Shipping Address",
                String_1206: "+1",
                String_1207: "+1",
                String_1208: "+1",
                String_1209: "Email : ",
                String_1210: "Shipping",
                String_1211: "Shipping:",
                String_1212: "Shipping:",
                String_1213: "Shipping:",
                String_1214: "Free Shipping",
                String_1215: "Home Delivery:",
                String_1216: "Home Delivery:",
                String_1217: "Home Delivery:",
                String_1218: "Free Home Delivery",
                String_1219: "Subtotal:",
                String_1220: "Subtotal:",
                String_1221: "Subtotal:",
                String_1222: "Subtotal:",
                String_1223: "Subtotal:",
                String_1224: "Subtotal:",
                String_1225: "Tax:",
                String_1226: "You Save",
                String_1227: "You Save",
                String_1228: "You Save",
                String_1229: "Apply Promo Code",
                String_1230: "Apply",
                String_1231: "You applied promo code : ",
                String_1232: "Item",
                String_1233: "Confirmation #",
                String_1234: "Set of ",
                String_1235: "On Sale",
                String_1236: "Move to Wish List",
                String_1237: "Remove",
                String_1238: "Loyalty card",
                String_1239: "Loyalty card",
                String_1240: "Edit",
                String_1241: "Done",
                String_1242: "Your Shopping Cart Is Empty",
                String_1243: "Update",
                String_1244: "Free Shipping",
                String_1245: "What's this?",
                String_1246: "Why do we recommend an alternate phone number?  To ensure we can contact you to schedule your delivery. Providing a second number give as a better chance of reaching you.",
                String_1247: "Recommended for Scheduling & Delivery",
                String_1248: "Please Enter Zipcode",
                String_1249: "Please Enter Loyalty Number",
                String_1250: "Please Click To Edit Reward",
                String_1251: "Please Enter Promotion Code",
                String_1252: "Please Enter Quantity",
                String_1253: "Please Select Quantity",
                String_1254: "Please Click to SignIn",
                String_1255: "Please Enter First Name",
                String_1256: "Please Enter Last Name",
                String_1257: "(Sales tax will be applied during checkout)",
                String_1258: "There appears to be a problem with the city, state and zip combination. Please try again.",
                String_1259: "Invalid city, state or zip combination.",
                String_1300: "Apply Promo Code(s)",
                String_1301: "Edit Promo Code(s)",
                String_1302: "Sorry, this code is invalid",
                String_1303: "Apply Promo Code",
                String_1304: "Enter Code:",
                String_1305: "Did a Sales Associate Help You?",
                String_1306: "RSA Code:",
                String_1307: "(edit)",
                String_1308: "(remove)",
                String_1309: "Sorry, this code is invalid",
                String_1310: "Sorry, something went wrong. The RSA Code could not be applied successfully. Please refresh the page and try again.",
                String_1311: "Please enter a RSA ID",
                String_1312: "Enter the code provided by our sales associate",
                String_1313: "This RSA Code has already been applied",
                String_1400: "Back To Payment",
                String_1401: "Secure Checkout",
                String_1402: "Shopping is always safe and secure.",
                String_1403: "Summary",
                String_1404: "Synchrony",
                String_1405: "Based on the payment type selected, Remove or Move to Wishlist options are not available.",
                String_1406: "Your cart total is below the minimum amount required for the financing option. Please go back to payment page and select another financing option.",
                String_1407: "BILLING",
                String_1408: "PAYMENT",
                String_1409: "CONFIRM",
                String_1410: "Order Summary",
                String_1411: "Shipping to : ",
                String_1412: "Receipt : ",
                String_1413: "Your Order",
                String_1414: "Payment Type",
                String_1415: "1",
                String_1416: "2",
                String_1417: "3",
                String_1418: "4",
                String_1419: "Use This Address",
                String_1420: "SHIPPING",
                String_1421: "each"
            };
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            Controls.ResourceStrings["fr"] = {
                String_1: "(FR) Shopping cart",
                String_2: "(FR) Product details",
                String_3: "(FR) Each",
                String_4: "(FR) Quantity",
                String_5: "(FR) Line total",
                String_6: "(FR) Remove",
                String_7: "(FR) Savings",
                String_8: "(FR) Update quantity",
                String_9: "(FR) Order summary",
                String_10: "(FR) Subtotal:",
                String_11: "(FR) Shipping and handling:",
                String_12: "(FR) Order total:",
                String_13: "(FR) Total savings:",
                String_14: "(FR) Next",
                String_15: "(FR) There are no items in your shopping cart. Please add items to the cart.",
                String_16: "(FR) Delivery information",
                String_17: "(FR) Delivery preference:",
                String_18: "(FR) Shipping address",
                String_19: "(FR) Shipping name",
                String_20: "(FR) Country/region",
                String_21: "(FR) United States",
                String_22: "(FR) Address",
                String_23: "(FR) City",
                String_24: "(FR) State/province",
                String_25: "(FR) ZIP/postal code",
                String_26: "(FR) Shipping method",
                String_27: "(FR) Get shipping options",
                String_28: "(FR) Previous",
                String_29: "(FR) Name",
                String_30: "(FR) Billing information",
                String_31: "(FR) Contact information",
                String_32: "(FR) Email address",
                String_33: "(FR) Confirm email address",
                String_34: "(FR) Payment method",
                String_35: "(FR) Card number",
                String_36: "(FR) Card type",
                String_37: "(FR) Expiration month",
                String_38: "(FR) Expiration year",
                String_39: "(FR) CCID",
                String_40: "(FR) What is this?",
                String_41: "(FR) Payment amount",
                String_42: "(FR) Billing address",
                String_43: "(FR) Same as shipping address",
                String_44: "(FR) Address2",
                String_45: "(FR) Review and confirm",
                String_46: "(FR) Order information",
                String_47: "(FR) Edit",
                String_48: "(FR) Credit card",
                String_49: "(FR) Checkout",
                String_50: "(FR) You have not added any promotion code to your order",
                String_51: "(FR) Tax:",
                String_52: "(FR) Submit order",
                String_53: "(FR) Thank you for your order",
                String_54: "(FR) Your order confirmation number is ",
                String_55: "(FR) Street",
                String_56: "(FR) State",
                String_57: "(FR) Zipcode",
                String_58: "(FR) Email",
                String_59: "(FR) Payment",
                String_60: "(FR) CardNumber",
                String_61: "(FR) Please select shipping method",
                String_62: "(FR) The confirm email address must match the email address.",
                String_63: "(FR) Sorry, something went wrong. The shopping cart information couldn't be retrieved. Please refresh the page and try again.",
                String_64: "(FR) Sorry, something went wrong. The product was not removed from the cart successfully. Please refresh the page and try again.",
                String_65: "(FR) Sorry, something went wrong. The product quantity couldn't be updated. Please refresh the page and try again.",
                String_66: "(FR) Sorry, something went wrong. Delivery methods could not be retrieved. Please refresh the page and try again.",
                String_67: "(FR) Sorry, something went wrong. The shipping information was not stored successfully. Please refresh the page and try again.",
                String_68: "(FR) Sorry, something went wrong. The payment card type information was not retrieved successfully. Please refresh the page and try again.",
                String_69: "(FR) Sorry, something went wrong. The order submission was not successful. Please refresh the page and try again.",
                String_70: "(FR) Invalid parameter",
                String_71: "(FR) validatorType attribute is not provided for validator binding.",
                String_72: "(FR) Use text characters only. Numbers, spaces, and special characters are not allowed.",
                String_73: "(FR) Use text characters only. Numbers, spaces, and special characters are not allowed.",
                String_74: "(FR) The quantity field cannot be empty",
                String_75: "(FR) Select delivery method.",
                String_76: "(FR) The email address is invalid.",
                String_77: "(FR) Please enter the name.",
                String_78: "(FR) Please enter the street number.",
                String_79: "(FR) Please enter the address.",
                String_80: "(FR) Please enter the city.",
                String_81: "(FR) Please enter the zip/postal code.",
                String_82: "(FR) Please enter the state.",
                String_83: "(FR) Please enter the country.",
                String_84: "(FR) Please specify a payment card name.",
                String_85: "(FR) Please enter a valid card number.",
                String_86: "(FR) Please enter a valid CCID.",
                String_87: "(FR) Please specify a valid amount.",
                String_88: "(FR) {0} PRODUCT(S)",
                String_89: "(FR) Included",
                String_90: "(FR) Color: {0}",
                String_91: "(FR) Size: {0}",
                String_92: "(FR) Style: {0}",
                String_93: "(FR) Sorry, something went wrong. The promotion code could not be added successfully. Please refresh the page and try again.",
                String_94: "(FR) Sorry, something went wrong. The promotion code could not be removed successfully. Please refresh the page and try again.",
                String_95: "(FR) Apply",
                String_96: "(FR) Promotion Codes",
                String_97: "(FR) Please enter a promotion code",
                String_98: "(FR) Sorry, something went wrong. The channel configuration could not be retrieved successfully. Please refresh the page and try again.",
                String_99: "(FR) Ship items",
                String_100: "(FR) Pick up in store",
                String_101: "(FR) Select delivery options by item",
                String_102: "(FR) Find a store",
                String_103: "(FR) miles",
                String_104: "(FR) Available stores",
                String_105: "(FR) Store",
                String_106: "(FR) Distance",
                String_107: "(FR) Products are not available for pick up in the stores around the location you searched. Please update your delivery preferences and try again.",
                String_108: "(FR) Sorry, something went wrong. An error occurred while trying to get stores. Please refresh the page and try again.",
                String_109: "(FR) Sorry, we were not able to decipher the address you gave us.  Please enter a valid Address",
                String_110: "(FR) Sorry, something went wrong. An error has occured while looking up the address you provided. Please refresh the page and try again.",
                String_111: "(FR) Products are not available in this store",
                String_112: "(FR) Product availability:",
                String_113: "(FR) Products are not available in the selected store, Please select a different store",
                String_114: "(FR) Please select a store for pick up",
                String_115: "(FR) Store address",
                String_116: "(FR) Send to me",
                String_117: "(FR) Optional note",
                String_118: "(FR) Please enter email address for gift card delivery",
                String_119: "(FR) Sorry, something went wrong. An error occurred while trying to get the email address. Please enter the email address in the text box below",
                String_120: "(FR) Enter the shipping address and then click get shipping options to view the shipping options that are available for your area.",
                String_121: "(FR) Delivery method",
                String_122: "(FR) Select your delivery preference",
                String_123: "(FR) Cancel",
                String_124: "(FR) Done",
                String_125: "(FR) for product: {0}",
                String_126: "(FR) Please select delivery preference for product {0}",
                String_127: "(FR) Add credit card",
                String_128: "(FR) Gift card",
                String_129: "(FR) Add gift card",
                String_130: "(FR) Loyalty card",
                String_131: "(FR) Add loyalty card",
                String_132: "(FR) Payment information",
                String_133: "(FR) Payment total:",
                String_134: "(FR) Order total:",
                String_135: "(FR) Gift card does not exist",
                String_136: "(FR) Gift card balance",
                String_137: "(FR) Card details",
                String_138: "(FR) Sorry, something went wrong. An error occurred while trying to get payment methods supported by the store. Please refresh the page and try again.",
                String_139: "(FR) Please select payment method",
                String_140: "(FR) The expiration date is not valid. Please select valid expiration month and year and then try again",
                String_141: "(FR) Please enter a valid gift card number",
                String_142: "(FR) Get gift card balance",
                String_143: "(FR) Apply full amount",
                String_144: "(FR) Please enter a gift card number",
                String_145: "(FR) Sorry, something went wrong. An error occurred while trying to get gift card balance. Please refresh the page and try again.",
                String_146: "(FR) Gift card payment amount cannot be zero",
                String_147: "(FR) Gift card payment amount is more than order total",
                String_148: "(FR) Gift card does not have sufficient balance",
                String_149: "(FR) Payment amount is different from the order total",
                String_150: "(FR) Sorry, something went wrong. An error occurred while trying to get loyalty card information. Please refresh the page and try again.",
                String_151: "(FR) Please enter a valid loyalty card number",
                String_152: "(FR) Loyalty card payment amount cannot be zero",
                String_153: "(FR) Loyalty card payment amount is more than order total",
                String_154: "(FR) The loyalty card is blocked",
                String_155: "(FR) The loyalty card is not allowed for payment",
                String_156: "(FR) The loyalty payment amount exceeds what is allowed for this loyalty card in this transaction",
                String_157: "(FR) The loyalty card number does not exist",
                String_158: "(FR) Please select delivery preference",
                String_159: "(FR) Please select a delivery preference...",
                String_160: "(FR) Sorry, something went wrong. An error occurred while trying to get delivery methods information. Please refresh the page and try again.",
                String_161: "(FR) Select address...",
                String_162: "(FR) You have not added loyalty card number to your order",
                String_163: "(FR) Enter a reward card for the current order. You can include only one reward card per order",
                String_164: "(FR) Sorry, something went wrong. An error occurred while trying to update reward card id in cart. Please refresh the page and try again.",
                String_165: "(FR) Sorry, something went wrong. An error occurred while retrieving the country region information. Please refresh the page and try again.",
                String_166: "(FR) TBD",
                String_167: "(FR) Mini Cart",
                String_168: "(FR) Ordering FAQ",
                String_169: "(FR) Return policy",
                String_170: "(FR) Store locator tool",
                String_171: "(FR) Continue shopping",
                String_172: "(FR) Cart Order Total",
                String_173: "(FR) View full cart contents",
                String_174: "(FR) Quantity:",
                String_175: "(FR) Added to your cart:",
                String_176: "(FR) Loading ...",
                String_177: "(FR) Sorry, something went wrong. The cart's promotion information couldn't be retrieved. Please refresh the page and try again.",
                String_178: "(FR) Delivery method",
                String_179: "(FR) Updating shopping cart ...",
                String_180: "(FR) Submitting order ...",
                String_181: "(FR) Discount code",
                String_182: "(FR) Add coupon code",
                String_183: "(FR) Enter a discount code",
                String_184: "(FR) Please enter a valid discount code",
                String_185: "(FR) Sorry, something went wrong. An error occurred while retrieving the state/province information. Please refresh the page and try again.",
                String_1170: "(FR) Address First Name or Last Name can have only alphabets."
            };
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var stringValidationErrorMessage = Controls.Resources.String_72;
            var stringValidationRegex = Controls.Resources.String_73;

            
            ;

            var FieldValidator = (function () {
                function FieldValidator(params) {
                    this._validationAttributes = params;
                }
                FieldValidator.prototype.setValidationAttributes = function (element, addressType) {
                    for (var attrName in this._validationAttributes) {
                        var value;

                        if (attrName == "title") {
                            if (!AFM.Utils.isNullOrUndefined(addressType) && !AFM.Utils.isNullOrUndefined(this._validationAttributes[attrName])) {
                                value = this._validationAttributes[attrName].replace("{addresstype}", addressType);
                            } else {
                                value = this._validationAttributes[attrName];
                            }
                        } else {
                            value = this._validationAttributes[attrName];
                        }
                        if (value) {
                            element.setAttribute(attrName, value);
                        }
                    }

                    if (this._validationAttributes.required !== true) {
                        element.removeAttribute("required");
                    }
                };

                FieldValidator.prototype.setTitleAttributeIfInvalid = function (element, addressType) {
                    if (!AFM.Utils.isNullOrUndefined(addressType) && !AFM.Utils.isNullOrUndefined(this._validationAttributes["title"]))
                        var value = this._validationAttributes["title"].replace("{addresstype}", addressType);
                    else
                        var value = this._validationAttributes["title"];
                    if (value && element.getAttribute("msax-isValid") == "false") {
                        if (addressType != "") {
                            element.setAttribute("title", value);
                        } else {
                            element.setAttribute("title", value);
                        }
                    } else {
                        element.removeAttribute("title");
                    }
                };
                return FieldValidator;
            })();
            Controls.FieldValidator = FieldValidator;

            var EntityValidatorBase = (function () {
                function EntityValidatorBase() {
                }
                EntityValidatorBase.prototype.setValidationAttributes = function (element, fieldName, addressType) {
                    var fieldValidator = this[fieldName];
                    if (fieldValidator) {
                        fieldValidator.setValidationAttributes(element, addressType);
                    }
                };
                return EntityValidatorBase;
            })();
            Controls.EntityValidatorBase = EntityValidatorBase;

            var ShoppingCartItemValidator = (function (_super) {
                __extends(ShoppingCartItemValidator, _super);
                function ShoppingCartItemValidator() {
                    _super.call(this);

                    this.Quantity = new FieldValidator({ maxLength: 4, required: true, title: Controls.Resources.String_74, pattern: "^(0?[0-9]{1,3}|[0-4][0-9][0-9][0-9]|5000)$" });
                }
                return ShoppingCartItemValidator;
            })(EntityValidatorBase);
            Controls.ShoppingCartItemValidator = ShoppingCartItemValidator;

            var PromotionValidator = (function (_super) {
                __extends(PromotionValidator, _super);
                function PromotionValidator() {
                    _super.call(this);

                    this.Promotioncode = new FieldValidator({
                        maxLength: 100, required: true, title: Controls.Resources.String_97
                    });
                }
                return PromotionValidator;
            })(EntityValidatorBase);
            Controls.PromotionValidator = PromotionValidator;

            var SelectedOrderShippingOptionsValidator = (function (_super) {
                __extends(SelectedOrderShippingOptionsValidator, _super);
                function SelectedOrderShippingOptionsValidator() {
                    _super.call(this);

                    this.DeliveryMethodId = new FieldValidator({
                        required: true, title: Controls.Resources.String_75
                    });
                }
                return SelectedOrderShippingOptionsValidator;
            })(EntityValidatorBase);
            Controls.SelectedOrderShippingOptionsValidator = SelectedOrderShippingOptionsValidator;

            var SelectedOrderDeliveryOptionValidator = (function (_super) {
                __extends(SelectedOrderDeliveryOptionValidator, _super);
                function SelectedOrderDeliveryOptionValidator() {
                    _super.call(this);

                    this.DeliveryModeId = new FieldValidator({
                        required: true, title: Controls.Resources.String_75
                    });
                }
                return SelectedOrderDeliveryOptionValidator;
            })(EntityValidatorBase);
            Controls.SelectedOrderDeliveryOptionValidator = SelectedOrderDeliveryOptionValidator;

            var CustomerValidator = (function (_super) {
                __extends(CustomerValidator, _super);
                function CustomerValidator() {
                    _super.call(this);

                    this.FirstName = new FieldValidator({ maxLength: 25, required: true, title: stringValidationErrorMessage, pattern: stringValidationRegex });
                    this.MiddleName = new FieldValidator({ maxLength: 25, title: stringValidationErrorMessage, pattern: stringValidationRegex });
                    this.LastName = new FieldValidator({ maxLength: 25, required: true, title: stringValidationErrorMessage, pattern: stringValidationRegex });
                    this.Name = new FieldValidator({ maxLength: 100, required: true });
                }
                return CustomerValidator;
            })(EntityValidatorBase);
            Controls.CustomerValidator = CustomerValidator;

            var AddressValidator = (function (_super) {
                __extends(AddressValidator, _super);
                function AddressValidator() {
                    _super.call(this);

                    this.Phone = new FieldValidator({ maxLength: 10, required: true, pattern: "^[+]?[0-9]{10,10}$", title: Controls.Resources.String_1169 });
                    this.Url = new FieldValidator({ maxLength: 255 });
                    this.Email = new FieldValidator({
                        maxLength: 80, required: true, title: Controls.Resources.String_76,
                        pattern: "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$"
                    });
                    this.Name = new FieldValidator({ maxLength: 51, required: true, title: Controls.Resources.String_77 });
                    this.StreetNumber = new FieldValidator({ maxLength: 250, title: Controls.Resources.String_78 });
                    this.Street = new FieldValidator({ maxLength: 255, required: true, title: Controls.Resources.String_79 });
                    this.City = new FieldValidator({ maxLength: 60, required: true, title: Controls.Resources.String_80 });
                    this.ZipCode = new FieldValidator({ maxLength: 10, required: true, title: Controls.Resources.String_81, pattern: "^([0-9]{5})(?:[-\s]*([0-9]{4}))?$" });

                    this.State = new FieldValidator({ required: true, title: Controls.Resources.String_82 });
                    this.Country = new FieldValidator({ required: true, title: Controls.Resources.String_83 });

                    this.FirstName = new FieldValidator({ maxLength: 25, required: true, title: Controls.Resources.String_1255, pattern: "[a-zA-Z ]+" });
                    this.LastName = new FieldValidator({ maxLength: 25, required: true, title: Controls.Resources.String_1256, pattern: "[a-zA-Z ]+" });
                    this.Phone2 = new FieldValidator({ maxLength: 10, title: Controls.Resources.String_1169, pattern: "^[+]?[0-9]{10,10}$" });
                    this.Street2 = new FieldValidator({ maxLength: 255, title: Controls.Resources.String_79 });
                    this.Email2 = new FieldValidator({
                        maxLength: 80, title: Controls.Resources.String_76,
                        pattern: "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$"
                    });
                }
                return AddressValidator;
            })(EntityValidatorBase);
            Controls.AddressValidator = AddressValidator;

            var ZipCodeValidator = (function (_super) {
                __extends(ZipCodeValidator, _super);
                function ZipCodeValidator() {
                    _super.call(this);
                    this.ZipCode = new FieldValidator({ maxLength: 5, required: true, title: Controls.Resources.String_81, pattern: "^[0-9]{5}$" });
                }
                return ZipCodeValidator;
            })(EntityValidatorBase);
            Controls.ZipCodeValidator = ZipCodeValidator;

            var PaymentCardTypeValidator = (function (_super) {
                __extends(PaymentCardTypeValidator, _super);
                function PaymentCardTypeValidator() {
                    _super.call(this);

                    this.NameOnCard = new FieldValidator({ maxLength: 100, required: true, title: Controls.Resources.String_84 });
                    this.CardNumber = new FieldValidator({ maxLength: 30, required: true, title: Controls.Resources.String_85 });
                    this.CCID = new FieldValidator({ maxLength: 50, required: true, title: Controls.Resources.String_86, pattern: "^[0-9]{3,4}$" });
                    this.PaymentAmount = new FieldValidator({ maxLength: 100, required: true, title: Controls.Resources.String_87, pattern: "\w+([0123456789.]\w+)*" });
                }
                return PaymentCardTypeValidator;
            })(EntityValidatorBase);
            Controls.PaymentCardTypeValidator = PaymentCardTypeValidator;

            var GiftCardTypeValidator = (function (_super) {
                __extends(GiftCardTypeValidator, _super);
                function GiftCardTypeValidator() {
                    _super.call(this);

                    this.CardNumber = new FieldValidator({ maxLength: 30, required: true, title: Controls.Resources.String_141 });
                    this.PaymentAmount = new FieldValidator({ maxLength: 100, required: true, title: Controls.Resources.String_87 });
                }
                return GiftCardTypeValidator;
            })(EntityValidatorBase);
            Controls.GiftCardTypeValidator = GiftCardTypeValidator;

            var LoyaltyCardTypeValidator = (function (_super) {
                __extends(LoyaltyCardTypeValidator, _super);
                function LoyaltyCardTypeValidator() {
                    _super.call(this);

                    this.CardNumber = new FieldValidator({ maxLength: 30, required: true, title: Controls.Resources.String_151 });
                    this.PaymentAmount = new FieldValidator({ maxLength: 100, required: true, title: Controls.Resources.String_87 });
                }
                return LoyaltyCardTypeValidator;
            })(EntityValidatorBase);
            Controls.LoyaltyCardTypeValidator = LoyaltyCardTypeValidator;

            var DiscountCardTypeValidator = (function (_super) {
                __extends(DiscountCardTypeValidator, _super);
                function DiscountCardTypeValidator() {
                    _super.call(this);

                    this.CardNumber = new FieldValidator({ maxLength: 100, required: true, title: Controls.Resources.String_184 });
                }
                return DiscountCardTypeValidator;
            })(EntityValidatorBase);
            Controls.DiscountCardTypeValidator = DiscountCardTypeValidator;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));

ko.bindingHandlers.resx = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var binding = ko.utils.unwrapObservable(valueAccessor()) || {};

        for (var memberName in binding) {
            switch (memberName) {
                case "textContent":
                    element.textContent = AFM.Ecommerce.Controls.Resources[binding[memberName]];
                    break;

                case "label":
                    element.label = AFM.Ecommerce.Controls.Resources[binding[memberName]];
                    break;

                case "title":
                    element.title = AFM.Ecommerce.Controls.Resources[binding[memberName]];
                    break;

                case "placeholder":
                    element.placeholder = AFM.Ecommerce.Controls.Resources[binding[memberName]];
                    break;
            }
        }
    }
};

ko.bindingHandlers.validator = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var binding = ko.utils.unwrapObservable(valueAccessor()) || {};

        if (!AFM.Utils.isNullOrWhiteSpace(binding.field)) {
            var valueObject = binding.data ? binding.data[binding.field] : bindingContext.$data[binding.field];

            if (AFM.Utils.isNullOrUndefined(valueObject)) {
                valueObject = ko.observable('');
                valueObject.subscribe(function (newValue) {
                    bindingContext.$data[binding.field] = newValue;
                });
            }

            ko.applyBindingsToNode(element, { value: valueObject, valueUpdate: 'input' });
        }

        if (AFM.Utils.isNullOrUndefined(binding.validatorType)) {
            throw AFM.Ecommerce.Controls.Resources.String_71;
        }

        var validator = Object.create(AFM.Ecommerce.Controls[binding.validatorType].prototype);
        validator.constructor.apply(validator);

        var field = binding.validatorField ? binding.validatorField : binding.field;

        validator.setValidationAttributes(element, field, binding.addressType);

        var $element = $(element);
        $element.attr("msax-isValid", true);

        $element.change(function (eventObject) {
            var isValid = eventObject.currentTarget.checkValidity();

            if (isValid && binding.validate) {
                isValid = binding.validate.call(viewModel, eventObject.currentTarget);
            }

            $element.attr("msax-isValid", isValid);

            if (eventObject.currentTarget.type === "radio") {
                var $label = $element.parent().find("[for=" + eventObject.currentTarget.id + "]");
                $label.attr("msax-isValid", isValid);
            }

            return isValid;
        });
    }
};

ko.bindingHandlers.submitIfValid = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var binding = ko.utils.unwrapObservable(valueAccessor()) || {};

        var $element = $(element);

        $element.click(function (eventObject) {
            eventObject.preventDefault();

            var $wrapper = $element.closest(binding.containerSelector);

            if ($wrapper.length === 0) {
                $wrapper = $(binding.containerSelector);
            }

            $wrapper.find("input,select").each(function (index, elem) {
                $(elem).change();
            });

            var $invalidFields = $wrapper.find("[msax-isValid=false]");

            $invalidFields.first().focus();
            $invalidFields.first().select();

            if ($invalidFields.length === 0) {
                var isValid = true;
                if (binding.validate) {
                    isValid = binding.validate.call(viewModel, $wrapper);
                }

                if (isValid) {
                    binding.submit.call(viewModel, eventObject);
                }
            }
        });
    }
};

ko.bindingHandlers.clickIfValid = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var binding = ko.utils.unwrapObservable(valueAccessor()) || {};

        var $element = $(element);
        $element.click(function (eventObject) {
            eventObject.preventDefault();

            var $wrapper = $element.closest(binding.containerSelector);

            if ($wrapper.length === 0) {
                $wrapper = $(binding.containerSelector);
            }

            $wrapper.find("input,select").each(function (index, elem) {
                $(elem).change();
            });

            var $invalidFields = $wrapper.find("[msax-isValid=false]");

            var errorField;
            var i = 0;

            if ($invalidFields.length > 0) {
                $.each($invalidFields, function (index, attr) {
                    if (attr.nodeName == "INPUT" || attr.nodeName == "SELECT") {
                        $invalidFields[index].focus();
                        errorField = ".msax-" + attr.id + "Error";
                        $(document).find(errorField).text(attr.title);
                        $(document).find(errorField).show();
                        i = i + 1;
                    }
                });
            }

            if ($invalidFields.length === 0) {
                var isValid = true;
                if (binding.validate) {
                    isValid = binding.validate.call(viewModel, $wrapper);
                }

                if (isValid) {
                    binding.click.call(viewModel, eventObject);
                }
            }
        });
    }
};
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var AFMExtendedService = (function () {
                function AFMExtendedService() {
                }
                AFMExtendedService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_AFMExtendedServiceUrl + '/');
                };

                AFMExtendedService.GetZipCode = function () {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetZipCode", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetCultureId = function () {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetCultureId", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.SetShippingtoLineItems = function (shippingOptions, dataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "shippingOptions": shippingOptions,
                        "dataLevel": dataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SetShippingtoLineItems", data, function (data) {
                        Controls.ShoppingCartService.UpdateShoppingCart(data, true);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.SetZipCode = function (zipCode, isCheckoutSession) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "zipCode": zipCode
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SetZipCode", data, function (data) {
                        if (!AFM.Utils.isNullOrUndefined(data)) {
                            Controls.ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        }
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.SendOrderSummary = function (orderSummary) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "orderSummary": orderSummary
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SendOrderSummary", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetUserCartInfo = function () {
                    var asyncResult = new Controls.AsyncResult();
                    ;

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetUserCartInfo", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.SetUserCartInfo = function (userCartData) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "userCartData": userCartData
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SetUserCartInfo", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetUserPageMode = function () {
                    var asyncResult = new Controls.AsyncResult();
                    ;

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetUserPageMode", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.SetUserPageMode = function (userPageMode) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "userPageMode": userPageMode
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SetUserPageMode", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.ClearAllCookies = function () {
                    var asyncResult = new Controls.AsyncResult();
                    ;

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("ClearAllCookies", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.SubmitOrder = function (tenderLineData, headerValues, email, cardToken) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "tenderDataLine": tenderLineData,
                        "headerValues": headerValues,
                        "emailAddress": email,
                        "cardToken": cardToken
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("CreateOrder", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.CommenceCheckout = function (dataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "dataLevel": dataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("CommenceCheckout", data, function (data) {
                        Controls.ShoppingCartService.UpdateShoppingCart(data, true);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetCardTokenData = function (tranid) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "tranid": tranid
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetCardTokenData", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });
                    return asyncResult;
                };

                AFMExtendedService.ValidateAddress = function (address) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "address": address
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("ValidateAddress", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetAFMAddressState = function (countryRegionId) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "countryRegionId": countryRegionId
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetAFMAddressState", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.ValidateZipcode = function (countryRegionId, zipCode) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "countryRegionId": countryRegionId,
                        "zipCode": zipCode
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("ValidateZipcode", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.ValidatePromocode = function (promoCode) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "promoCode": promoCode
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("ValidatePromocode", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetShippingAddresses = function (IsShipping) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "IsShipping": IsShipping
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetShippingAddresses", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.GetOrderConfirmationDetails = function () {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetOrderConfirmationDetails", data, function (data) {
                        asyncResult.resolve(data);
                        var shoppingCartResonse = new Controls.ShoppingCartResponseClass(data);
                        Controls.ShoppingCartService.UpdateShoppingCart(shoppingCartResonse, true);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.RedirectToPayment = function () {
                    var asyncResult = new Controls.AsyncResult();
                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("RedirectToPayment", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });
                    return asyncResult;
                };

                AFMExtendedService.ValidateRsaId = function (rsaId, isCheckoutSession) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "rsaId": rsaId,
                        "isCheckoutSession": isCheckoutSession
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("ValidateRsaId", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                AFMExtendedService.RemoveRsaIdFromCart = function (isCheckoutSession) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("RemoveRsaIdFromCart", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };
                return AFMExtendedService;
            })();
            Controls.AFMExtendedService = AFMExtendedService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var CheckoutService = (function () {
                function CheckoutService() {
                }
                CheckoutService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_CheckoutServiceUrl + '/');
                };

                CheckoutService.SubmitOrder = function (tenderLineData, email) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "tenderDataLine": tenderLineData,
                        "emailAddress": email
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("CreateOrder", data, function (data) {
                        Controls.ShoppingCartService.UpdateShoppingCart(data, true);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetPaymentCardTypes = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetPaymentCardTypes", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetPaymentCard = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetPaymentCard", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });
                };

                CheckoutService.GetDeliveryPreferences = function () {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetDeliveryPreferences", data, function (response) {
                        asyncResult.resolve(response);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetDeliveryOptionsInfo = function () {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {};

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetDeliveryOptionsInfo", data, function (response) {
                        asyncResult.resolve(response);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetOrderDeliveryOptionsForShipping = function (shipToAddress) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "shipToAddress": shipToAddress
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetOrderDeliveryOptionsForShipping", data, function (response) {
                        asyncResult.resolve(response);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetLineDeliveryOptionsForShipping = function (selectedLineShippingInfo) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "selectedLineShippingInfo": selectedLineShippingInfo
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetLineDeliveryOptionsForShipping", data, function (response) {
                        asyncResult.resolve(response);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.SetOrderDeliveryOption = function (selectedDeliveryOption, dataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "selectedDeliveryOption": selectedDeliveryOption,
                        "dataLevel": dataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SetOrderDeliveryOption", data, function (response) {
                        Controls.ShoppingCartService.UpdateShoppingCart(response, true);
                        asyncResult.resolve(response);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.SetLineDeliveryOptions = function (lineDeliveryOptions, dataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "selectedLineDeliveryOptions": lineDeliveryOptions,
                        "dataLevel": dataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("SetLineDeliveryOptions", data, function (response) {
                        Controls.ShoppingCartService.UpdateShoppingCart(response, true);
                        asyncResult.resolve(response);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.IsAuthenticatedSession = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("IsAuthenticatedSession", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetUserEmail = function () {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetUserEmail", null, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                CheckoutService.GetGiftCardBalance = function (giftCardNumber) {
                    var asyncResult = new Controls.AsyncResult();

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    var data = {
                        "giftCardId": giftCardNumber
                    };

                    this.proxy.SubmitRequest("GetGiftCardInformation", data, function (data) {
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };
                return CheckoutService;
            })();
            Controls.CheckoutService = CheckoutService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
"use strict";
var AFM;
(function (AFM) {
    (function (Ecommerce) {
        (function (Controls) {
            var ShoppingCartService = (function () {
                function ShoppingCartService() {
                }
                ShoppingCartService.GetProxy = function () {
                    this.proxy = new Controls.AjaxProxy(msaxValues.msax_ShoppingCartServiceUrl + '/');
                };

                ShoppingCartService.UpdateShoppingCart = function (shoppingCartResponse, isCheckoutSession) {
                    if (!AFM.Utils.isNullOrUndefined(shoppingCartResponse.ShoppingCart) && AFM.Utils.hasElements(shoppingCartResponse.ShoppingCart.Items)) {
                        var KitSequenceNumbers = [];
                        var KitSequenceSet = [];
                        var ReassembledCartItems = [];

                        for (var itemVal in shoppingCartResponse.ShoppingCart.Items) {
                            var itemData = shoppingCartResponse.ShoppingCart.Items[itemVal];
                            if (!AFM.Utils.isNullOrUndefined(itemData.AFMKitSequenceNumber) && itemData.AFMKitProductId > 0) {
                                if (AFM.Utils.isNullOrUndefined(KitSequenceSet[itemData.AFMKitSequenceNumber])) {
                                    KitSequenceSet[itemData.AFMKitSequenceNumber] = [[], []];
                                    KitSequenceNumbers.push(itemData.AFMKitSequenceNumber);
                                    var data = new Controls.TransactionItemClass(null);
                                    data.ProductDetails = itemData.AFMKitItemProductDetails;
                                    data.AFMVendorName = itemData.AFMVendorName;
                                    data.AFMShippingMode = itemData.AFMShippingMode;
                                    data.AFMCartLineATP = itemData.AFMCartLineATP;

                                    data.AFMMultipleQty = 0;
                                    data.AFMLowestQty = 0;
                                    data.AFMQtyPerBox = 0;
                                    data.DeliveryModeId = itemData.DeliveryModeId;
                                    data.Quantity = itemData.AFMKitItemQuantity;
                                    data.ProductId = itemData.AFMKitProductId;
                                    data.ItemId = itemData.AFMKitItemId;
                                    data.LineId = itemData.AFMKitSequenceNumber.toString();
                                    data.AFMKitSequenceNumber = itemData.AFMKitSequenceNumber;
                                    var listingObject = this.CreateListingObject(itemData);
                                    data.Listing = [];
                                    data.Listing.push(listingObject);
                                    KitSequenceSet[itemData.AFMKitSequenceNumber][0] = data;
                                    KitSequenceSet[itemData.AFMKitSequenceNumber][1].push(itemData);
                                } else {
                                    var listingObject = this.CreateListingObject(itemData);
                                    var currentKitObject = KitSequenceSet[itemData.AFMKitSequenceNumber][0];
                                    currentKitObject.Listing.push(listingObject);
                                    KitSequenceSet[itemData.AFMKitSequenceNumber][0] = currentKitObject;
                                    KitSequenceSet[itemData.AFMKitSequenceNumber][1].push(itemData);
                                }
                            } else {
                                if (itemData.AFMItemType != Controls.AFMItemType.DeliveryServiceItem) {
                                    var listingObject = this.CreateListingObject(itemData);
                                    itemData.Listing = [];
                                    itemData.Listing.push(listingObject);

                                    if (+itemData.PriceWithCurrency.split('$')[1].replace(",", "") == 0.0) {
                                        if (msaxValues.msax_LocalPageMode != Controls.PageMode.Billing) {
                                            var error = new Controls.ErrorClass(null);
                                            error.ErrorMessage = Controls.Resources.String_1145;
                                            shoppingCartResponse.Errors.push(error);
                                        }
                                    }

                                    ReassembledCartItems.push(itemData);
                                }
                            }
                        }
                        for (var KitData in KitSequenceNumbers) {
                            var dt = KitSequenceNumbers[KitData];
                            var assembledKit = new Controls.TransactionItemClass(null);
                            assembledKit = KitSequenceSet[dt][0];
                            assembledKit.KitComponents = KitSequenceSet[dt][1];
                            var KitPriceValue = 0.0;
                            var KitPriceAfterDiscount = 0.0;
                            var OfferNames = "";
                            var KitDiscountValue = 0.0;
                            var KitTotalValue = 0.00;
                            var KitTaxValue = 0.0;

                            var IsKitCompPriceZero = false;

                            assembledKit.AFMCartLineATP = null;
                            for (var KtData in assembledKit.KitComponents) {
                                var kititemdata = assembledKit.KitComponents[KtData];

                                var componentQtyInKit = kititemdata.Quantity / kititemdata.AFMKitItemQuantity;
                                var PriceValue = +kititemdata.PriceWithCurrency.split('$')[1].replace(",", "");
                                KitPriceValue += PriceValue * componentQtyInKit;
                                var PriceAfterDiscount = +kititemdata.PriceAfterDiscount.split('$')[1].replace(",", "");
                                KitPriceAfterDiscount += PriceAfterDiscount * componentQtyInKit;
                                KitTaxValue += +kititemdata.TaxAmountWithCurrency.split('$')[1].replace(",", "");
                                KitTotalValue += +kititemdata.NetAmountWithCurrency.split('$')[1].replace(",", "");

                                if (+kititemdata.PriceWithCurrency.split('$')[1].replace(",", "") == 0.0) {
                                    IsKitCompPriceZero = true;
                                }

                                if (AFM.Utils.isNullOrUndefined(kititemdata.DeliveryModeId) && !AFM.Utils.isNullOrUndefined(assembledKit.DeliveryModeId))
                                    assembledKit.DeliveryModeId = null;
                                else
                                    assembledKit.DeliveryModeId = kititemdata.DeliveryModeId;

                                if (AFM.Utils.isNullOrUndefined(assembledKit.AFMCartLineATP)) {
                                    assembledKit.AFMCartLineATP = kititemdata.AFMCartLineATP;
                                } else {
                                    if (assembledKit.AFMCartLineATP.BestDate == kititemdata.AFMCartLineATP.BestDate && assembledKit.AFMCartLineATP.EndDateRange == kititemdata.AFMCartLineATP.EndDateRange)
                                        assembledKit.DeliveryModeId = kititemdata.DeliveryModeId;
                                }
                            }

                            var offersList = assembledKit.KitComponents.map(function (o) {
                                if (!AFM.Utils.isNullOrEmpty(o.OfferNames))
                                    return o.OfferNames;
                            });
                            offersList = $.unique(offersList);
                            if (offersList.length > 0)
                                OfferNames = offersList.join(" ");

                            assembledKit.OfferNames = OfferNames.trim();
                            if (IsKitCompPriceZero) {
                                assembledKit.PriceWithCurrency = AFM.Utils.CurrencyString(0, true);
                                assembledKit.PriceAfterDiscount = AFM.Utils.CurrencyString(0, true);
                                assembledKit.PriceAfterDiscount = AFM.Utils.CurrencyString(0, true);
                                assembledKit.DiscountAmount = 0;
                                assembledKit.DiscountAmountWithCurrency = AFM.Utils.CurrencyString(0, true);
                                assembledKit.TaxAmountWithCurrency = AFM.Utils.CurrencyString(0, true);
                                assembledKit.NetAmountWithCurrency = AFM.Utils.CurrencyString(0, true);

                                if (msaxValues.msax_LocalPageMode != Controls.PageMode.Billing) {
                                    var error = new Controls.ErrorClass(null);
                                    error.ErrorMessage = Controls.Resources.String_1145;
                                    shoppingCartResponse.Errors.push(error);
                                }
                            } else {
                                assembledKit.PriceWithCurrency = AFM.Utils.CurrencyString(Math.round(KitPriceValue * 100) / 100, true);
                                assembledKit.PriceAfterDiscount = AFM.Utils.CurrencyString(Math.round(KitPriceAfterDiscount * 100) / 100, true);
                                assembledKit.DiscountAmount = KitPriceValue - KitPriceAfterDiscount;

                                assembledKit.DiscountAmountWithCurrency = AFM.Utils.CurrencyString(Math.round((KitPriceValue - KitPriceAfterDiscount) * 100) / 100 * kititemdata.AFMKitItemQuantity, true);
                                assembledKit.TaxAmountWithCurrency = AFM.Utils.CurrencyString(KitTaxValue, true);

                                assembledKit.NetAmountWithCurrency = AFM.Utils.CurrencyString(Math.round(KitTotalValue * 100) / 100, true);
                            }

                            assembledKit.ItemType = Controls.TransactionItemType.Kit;
                            ReassembledCartItems.push(assembledKit);
                        }

                        var ShoppingCartResponseExtended = shoppingCartResponse;

                        if (ReassembledCartItems.length < shoppingCartResponse.ShoppingCart.Items.length && ReassembledCartItems.length > 0) {
                            ShoppingCartResponseExtended.ShoppingCart.Items = ReassembledCartItems;
                        }

                        for (var index in ShoppingCartResponseExtended.ShoppingCart.Items) {
                            var item = ShoppingCartResponseExtended.ShoppingCart.Items[index];
                            if (!AFM.Utils.isNullOrWhiteSpace(item.ProductDetails)) {
                                item["ProductDetailsExpanded"] = JSON.parse(item.ProductDetails);
                            } else {
                                item["ProductDetailsExpanded"] = { Name: "", ProductUrl: "", DimensionValues: "", ProductNumber: "", ImageUrl: "", ImageAlt: "" };
                            }
                            var convertedDimensionsValues = [];

                            for (var pde in item["ProductDetailsExpanded"].DimensionValues)
                                if (item["ProductDetailsExpanded"].DimensionValues.hasOwnProperty(pde)) {
                                    convertedDimensionsValues.push({
                                        "Key": pde,
                                        "Value": item["ProductDetailsExpanded"].DimensionValues[pde]
                                    });
                                }
                            item["ProductDetailsExpanded"].DimensionValues = convertedDimensionsValues;

                            var imageData = new Controls.ImageInfoClass(null);
                            imageData.Url = item["ProductDetailsExpanded"].ImageUrl;
                            imageData.AltText = item["ProductDetailsExpanded"].ImageAlt;

                            item.ImageMarkup = ShoppingCartService.BuildImageMarkup50x50(imageData);

                            if (!AFM.Utils.isNullOrUndefined(item.OfferNames)) {
                                item.OfferNames = item.OfferNames.replace(",", "\n");
                            }

                            if (item.ItemType == Controls.TransactionItemType.Kit) {
                                item.NoOfComponents = AFM.Utils.format(Controls.Resources.String_88, item.KitComponents.length);

                                for (var j = 0; j < item.KitComponents.length; j++) {
                                    if (!AFM.Utils.isNullOrWhiteSpace(item.KitComponents[j].ProductDetails)) {
                                        item.KitComponents[j].ProductDetailsExpanded = JSON.parse(item.KitComponents[j].ProductDetails);
                                    } else {
                                        item.KitComponents[j].ProductDetailsExpanded = { Name: "", ProductUrl: "", DimensionValues: "", ProductNumber: "", ImageUrl: "" };
                                    }

                                    var convertedKitComponentDimensionsValues = [];

                                    for (var pkde in item.KitComponents[j].ProductDetailsExpanded.DimensionValues)
                                        if (item.KitComponents[j].ProductDetailsExpanded.DimensionValues.hasOwnProperty(pkde)) {
                                            convertedKitComponentDimensionsValues.push({
                                                "Key": pkde,
                                                "Value": item.KitComponents[j].ProductDetailsExpanded.DimensionValues[pkde]
                                            });
                                        }
                                    item.KitComponents[j].ProductDetailsExpanded.DimensionValues = convertedKitComponentDimensionsValues;

                                    var imageDataforKit = new Controls.ImageInfoClass(null);
                                    imageDataforKit.Url = item.KitComponents[j].ProductDetailsExpanded.ImageUrl;
                                    imageDataforKit.AltText = item.KitComponents[j].ProductDetailsExpanded.ImageAlt;

                                    item.KitComponents[j].ImageMarkup = ShoppingCartService.BuildImageMarkup50x50(imageDataforKit);
                                }
                            }
                        }
                    }
                    Controls.CartData(shoppingCartResponse.ShoppingCart);
                    if (!AFM.Utils.isNullOrUndefined(shoppingCartResponse.Errors) && shoppingCartResponse.Errors.length > 0)
                        Controls.ErrorCount = shoppingCartResponse.Errors.length;
                    if (!AFM.Utils.isNullOrUndefined(shoppingCartResponse.ShoppingCart))
                        $(document).trigger('UpdateCartCount', shoppingCartResponse.ShoppingCart.CartCount);
                    else
                        $(document).trigger('UpdateCartCount', 0);

                    if (isCheckoutSession) {
                        $(document).trigger('UpdateCheckoutCart', [shoppingCartResponse]);
                    } else {
                        $(document).trigger('UpdateShoppingCart', [shoppingCartResponse]);
                    }
                };

                ShoppingCartService.CreateListingObject = function (transactionItem) {
                    var listingObject = new Controls.ListingClass(null);
                    listingObject.AFMKitItemId = AFM.Utils.isNullOrEmpty(transactionItem.AFMKitItemId) ? "" : transactionItem.AFMKitItemId;
                    var kitComponentInfo = new Controls.KitComponentInfoClass(null);
                    kitComponentInfo.KitLineIdentifier = AFM.Utils.isNullOrUndefined(transactionItem.LineId) ? "" : transactionItem.LineId;
                    kitComponentInfo.KitLineProductId = AFM.Utils.isNullOrUndefined(transactionItem.ProductId) ? 0 : transactionItem.ProductId;
                    kitComponentInfo.KitProductMasterId = AFM.Utils.isNullOrUndefined(transactionItem.AFMKitProductId) ? 0 : transactionItem.AFMKitProductId;
                    kitComponentInfo.Title = AFM.Utils.isNullOrEmpty(transactionItem.Name) ? "" : transactionItem.Name;
                    kitComponentInfo.Unit = AFM.Utils.isNullOrUndefined(transactionItem.AFMUnit) ? "" : transactionItem.AFMUnit;
                    listingObject.KitComponentDetails = kitComponentInfo;

                    listingObject.AFMKitItemProductDetails = AFM.Utils.isNullOrEmpty(transactionItem.AFMKitItemProductDetails) ? "" : transactionItem.AFMKitItemProductDetails;
                    listingObject.AFMKitProductId = AFM.Utils.isNullOrEmpty(transactionItem.AFMKitProductId) ? 0 : transactionItem.AFMKitProductId;
                    listingObject.AFMKitSequenceNumber = AFM.Utils.isNullOrUndefined(transactionItem.AFMKitSequenceNumber) ? 0 : transactionItem.AFMKitSequenceNumber;
                    listingObject.ItemId = AFM.Utils.isNullOrUndefined(transactionItem.ItemId) ? "" : transactionItem.ItemId;
                    listingObject.ListingId = AFM.Utils.isNullOrUndefined(transactionItem.ProductId) ? 0 : transactionItem.ProductId;
                    listingObject.ProductDetails = AFM.Utils.isNullOrEmpty(transactionItem.ProductDetails) ? "" : transactionItem.ProductDetails;
                    listingObject.LineId = AFM.Utils.isNullOrEmpty(transactionItem.LineId) ? "" : transactionItem.LineId;

                    listingObject.Quantity = transactionItem.Quantity;

                    return listingObject;
                };

                ShoppingCartService.GetDimensionValues = function (color, size, style) {
                    var hasColor = !AFM.Utils.isNullOrWhiteSpace(color);
                    var hasSize = !AFM.Utils.isNullOrWhiteSpace(size);
                    var hasStyle = !AFM.Utils.isNullOrWhiteSpace(style);

                    var dimensionValues = null;
                    if (hasColor || hasSize || hasStyle) {
                        dimensionValues = '' + (!hasColor ? '' : color) + (hasColor && (hasSize || hasStyle) ? ', ' : '') + (!hasSize ? '' : size) + (hasStyle && (hasColor || hasSize) ? ', ' : '') + (!hasStyle ? '' : style) + '';
                    }

                    return dimensionValues;
                };

                ShoppingCartService.OnUpdateShoppingCart = function (callerContext, handler) {
                    $(document).on('UpdateShoppingCart', $.proxy(handler, callerContext));
                };

                ShoppingCartService.OnUpdateCheckoutCart = function (callerContext, handler) {
                    $(document).on('UpdateCheckoutCart', $.proxy(handler, callerContext));
                };

                ShoppingCartService.GetShoppingCart = function (shoppingCartDataLevel, isCheckoutSession) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetShoppingCart", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.RemoveFromCart = function (isCheckoutSession, lineId, shoppingCartDataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "lineIds": [lineId],
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("RemoveItems", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.RemoveKitFromCart = function (isCheckoutSession, lineIds, shoppingCartDataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "lineIds": lineIds,
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("RemoveItems", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.UpdateQuantity = function (isCheckoutSession, items, shoppingCartDataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "items": items,
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("UpdateItems", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.GetPromotions = function (isCheckoutSession, shoppingCartDataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("GetPromotions", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.AddOrRemovePromotion = function (isCheckoutSession, promoCode, isAdd, shoppingCartDataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "isCheckoutSession": isCheckoutSession,
                        "promotionCode": promoCode,
                        "isAdd": isAdd,
                        "dataLevel": shoppingCartDataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("AddOrRemovePromotionCode", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, isCheckoutSession);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.CommenceCheckout = function (dataLevel) {
                    var asyncResult = new Controls.AsyncResult();

                    var data = {
                        "dataLevel": dataLevel
                    };

                    if (AFM.Utils.isNullOrUndefined(this.proxy)) {
                        this.GetProxy();
                    }

                    this.proxy.SubmitRequest("CommenceCheckout", data, function (data) {
                        ShoppingCartService.UpdateShoppingCart(data, true);
                        asyncResult.resolve(data);
                    }, function (errors) {
                        asyncResult.reject(errors);
                    });

                    return asyncResult;
                };

                ShoppingCartService.ReplaceOrAddQueryString = function (url, key, value) {
                    var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)", "i");
                    if (url.match(re)) {
                        return url.replace(re, '$1' + key + "=" + value + '$2');
                    } else {
                        var hash = '';
                        var separator = url.indexOf('?') !== -1 ? "&" : "?";
                        if (url.indexOf('#') !== -1) {
                            hash = url.replace(/.*#/, '#');
                            url = url.replace(/#.*/, '');
                        }

                        return url + separator + key + "=" + value + hash;
                    }
                };

                ShoppingCartService.GetNoImageMarkup = function () {
                    return AFM.Utils.format('<span class=\"msax-NoImageContainer\"></span>');
                };

                ShoppingCartService.BuildImageMarkup = function (imageData, width, height) {
                    if (!AFM.Utils.isNullOrUndefined(imageData)) {
                        var imageUrl = imageData.Url;
                        var altText = imageData.AltText;
                        var imageClassName = "msax-Image";

                        if (!AFM.Utils.isNullOrWhiteSpace(imageUrl)) {
                            var errorScript = AFM.Utils.format('onerror=\"this.parentNode.innerHTML=AFM.Ecommerce.Controls.ShoppingCartService.GetNoImageMarkup();\"');
                            return AFM.Utils.format('<img src=\"{0}\" class=\"{1}\" alt=\"{2}\" {3} />', imageUrl, imageClassName, altText, errorScript);
                        } else {
                            return ShoppingCartService.GetNoImageMarkup();
                        }
                    } else {
                        return ShoppingCartService.GetNoImageMarkup();
                    }
                };

                ShoppingCartService.BuildImageMarkup50x50 = function (imageData) {
                    if (AFM.Utils.isNullOrEmpty(imageData.Url)) {
                        imageData.Url = "";
                        imageData.AltText = "";
                    } else if (AFM.Utils.isNullOrUndefined(imageData.AltText)) {
                        imageData.AltText = "";
                    }

                    return ShoppingCartService.BuildImageMarkup(imageData, 50, 50);
                };
                return ShoppingCartService;
            })();
            Controls.ShoppingCartService = ShoppingCartService;
        })(Ecommerce.Controls || (Ecommerce.Controls = {}));
        var Controls = Ecommerce.Controls;
    })(AFM.Ecommerce || (AFM.Ecommerce = {}));
    var Ecommerce = AFM.Ecommerce;
})(AFM || (AFM = {}));
